// version 0.2-stable-ui

/* =========================
   DOM REFERENCES
========================= */

const reg_pay = document.getElementById('reg_pay')
const int_rate = document.getElementById('int_rate')
const m_1 = document.getElementById('m_1')
const m_2 = document.getElementById('m_2')
const t = document.getElementById('time_val')
const n = document.getElementById('num_of_pay')
const i = document.getElementById('calc_i')
const future_val = document.getElementById('future_val')

const nodes = [reg_pay, int_rate, m_1, m_2, t, n, i, future_val]

/* =========================
   DEBOUNCE
========================= */

function debounce(func, wait) {
  let timeout
  return function(...args) {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      func.apply(this, args)
    }, wait)
  }
}

/* =========================
   HELPERS
========================= */

const rmf = (num) => num.replaceAll(" ", "")

const isSet = (val) => !isNaN(val) && isFinite(val)

function roundTo(num, places) {
  return +(Math.round(num + "e+" + places) + "e-" + places)
}

function formatWithSpaces(numStr) {
  const parts = numStr.split('.')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  return parts.join('.')
}

/* =========================
   SNACKBAR ALERT SYSTEM
========================= */

function createSnackbarContainer() {
  if (document.getElementById("snackbar-container")) return
  
  const container = document.createElement("div")
  container.id = "snackbar-container"
  document.body.appendChild(container)
}
createSnackbarContainer()

function showAlert(message, type = "info", duration = 4000) {
  const container = document.getElementById("snackbar-container")
  
  const snackbar = document.createElement("div")
  snackbar.className = `snackbar ${type}`
  
  snackbar.innerHTML = `
		<div class="snack-content">
			<div class="snack-message">${message}</div>
			<div class="snack-actions">
				<button class="snack-expand">⤢</button>
				<button class="snack-close">✕</button>
			</div>
		</div>
	`
  
  container.appendChild(snackbar)
  
  setTimeout(() => {
    snackbar.classList.add("show")
  }, 10)
  
  const closeBtn = snackbar.querySelector(".snack-close")
  const expandBtn = snackbar.querySelector(".snack-expand")
  
  closeBtn.addEventListener("click", () => removeSnack(snackbar))
  
  expandBtn.addEventListener("click", () => {
    snackbar.classList.toggle("expanded")
  })
  
  if (duration > 0) {
    setTimeout(() => {
      removeSnack(snackbar)
    }, duration)
  }
}

function removeSnack(snack) {
  snack.classList.remove("show")
  setTimeout(() => snack.remove(), 300)
}

/* =========================
   CALCULATOR LOGIC
========================= */

function get_n(param_m1, param_t) {
  return param_m1 * param_t
}

function get_i(param_r, param_m1, param_m2) {
  if (param_m1 === 0 || param_m2 === 0) return NaN
  
  const rDIVm1 = param_r / param_m1
  const exp = param_m1 / param_m2
  const par = 1 + rDIVm1
  const answer = (par ** exp) - 1
  
  return answer
}

function get_F(param_R, param_i, param_n) {
  if (param_i === 0) return param_R * param_n
  
  const par = 1 + param_i
  const numerator = (par ** param_n) - 1
  
  if (!isFinite(numerator)) return NaN
  
  return param_R * (numerator / param_i)
}

/* =========================
   MAIN
========================= */

function main() {
  const vals = {
    R: parseFloat(rmf(reg_pay.value)),
    r: parseFloat(rmf(int_rate.value)),
    m1: parseFloat(rmf(m_1.value)),
    m2: parseFloat(rmf(m_2.value)),
    t: parseFloat(rmf(t.value)),
    n: parseFloat(rmf(n.value)),
    i: parseFloat(rmf(i.value)),
    F: parseFloat(rmf(future_val.value))
  }
  
  /* Remove computed if user types */
  nodes.forEach(node => {
    node.addEventListener('input', function() {
      this.classList.remove('computed')
    })
  })
  
  /* Compute i */
  if (!isSet(vals.i) && isSet(vals.r) && isSet(vals.m1) && isSet(vals.m2)) {
    const res = get_i(vals.r, vals.m1, vals.m2)
    
    if (!isSet(res)) {
      showAlert("Invalid interest configuration.", "error")
      return
    }
    
    i.value = roundTo(res, 15)
    i.classList.add("computed")
    vals.i = res
  }
  
  /* Compute n */
  if (!isSet(vals.n) && isSet(vals.m1) && isSet(vals.t)) {
    const res = get_n(vals.m1, vals.t)
    n.value = res
    n.classList.add("computed")
    vals.n = res
  }
  
  /* Compute F */
  if (!isSet(vals.F) && isSet(vals.R) && isSet(vals.i) && isSet(vals.n)) {
    const res = get_F(vals.R, vals.i, vals.n)
    
    if (!isSet(res)) {
      showAlert("Future value overflow. Try smaller values.", "error")
      return
    }
    
    future_val.value = roundTo(res, 10)
    future_val.classList.add("computed")
  }
  
  /* Compute R */
  if (!isSet(vals.R) && isSet(vals.F) && isSet(vals.i) && isSet(vals.n)) {
    const factor = get_F(1, vals.i, vals.n)
    
    if (!isSet(factor) || factor === 0) {
      showAlert("Cannot compute regular payment.", "error")
      return
    }
    
    const res = vals.F / factor
    reg_pay.value = roundTo(res, 10)
    reg_pay.classList.add("computed")
  }
}

/* =========================
   SANITIZER
========================= */

function sanitizer() {
  let value = this.value
    .replace(/[^\d.\s]/g, '')
    .replace(/\s{2,}/g, ' ')
  
  const parts = value.split('.')
  if (parts.length > 2) {
    value = parts[0] + '.' + parts.slice(1).join('')
  }
  
  this.value = value
}

/* =========================
   EVENTS
========================= */

const debouncedMain = debounce(main, 400)
const debouncedSanitizer = debounce(sanitizer, 200)

nodes.forEach(node => {
  node.addEventListener('input', debouncedSanitizer)
  node.addEventListener('input', debouncedMain)
  
  node.addEventListener('blur', function() {
    if (!this.value) return
    const clean = rmf(this.value)
    if (isNaN(clean)) return
    this.value = formatWithSpaces(clean)
  })
})