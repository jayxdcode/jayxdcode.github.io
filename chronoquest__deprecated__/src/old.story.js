const story = {
  "start": {
    "text": "A thick fog blankets the docks of Aethelhaven, a once-thriving port city now shrouded in mystery. Whispers speak of a ghost ship, the Cerulean Queen, that appears unannounced, claiming the lives of those foolish enough to board. You are a seasoned investigator, Amelia Brighton, hired to uncover the truth behind the disappearances.\n\nYou head towards the shrouded harbor, the salty air thick with tension. A lone figure, cloaked in shadow, leans against a crate.",
    "choices": [
      { "text": "Approach the figure", "next": "approach_figure" },
      { "text": "Wait and observe", "next": "wait_observe" }
    ]
  },
  "approach_figure": {
    "text": "As you get closer, you see a weathered sailor, his face etched with worry. 'Have you heard the rumors about the Cerulean Queen?' he rasps. He reveals he was the sole survivor of the last encounter, but the details are hazy.",
    "choices": [
      { "text": "Press him for details", "next": "press_details" },
      { "text": "Offer pomoc (help in his native tongue)", "next": "offer_help" }
    ]
  },
  "press_details": {
    "text": "The sailor's eyes widen with fear. 'The fog... it writhed... and whispered promises,' he mutters before collapsing. A faint, spectral glow emanates from the harbor.",
    "choices": [
      { "text": "Follow the glow", "next": "follow_glow" },
      { "text": "Seek medical attention for the sailor", "next": "seek_medical_attention" }
    ]
  },
  "offer_help": {
    "text": "The sailor seems surprised by your kindness. He reveals his name is Finn and hesitantly tells you about a hidden map leading to a secret passage beneath the docks.",
    "choices": [
      { "text": "Accept the map and ask for more details", "next": "accept_map" },
      { "text": "Press him about the whispers in the fog", "next": "press_about_whispers" }
    ]
  },
  "wait_observe": {
    "text": "You choose to be cautious and tail the figure from a distance. They enter a dilapidated warehouse near the docks.",
    "choices": [
      { "text": "Follow cautiously", "next": "follow_cautiously" },
      { "text": "Head back to the main street and gather information", "next": "gather_information" }
    ]
  },
  "follow_glow": {
    "text": "Curiosity compels you to investigate the source of the ghostly light. You find yourself amidst the fog, the spectral light revealing a spectral outline of a magnificent ship. A disembodied voice calls out, offering passage...",
    "choices": [
      { "text": "Board the ship", "next": "board_ship" },
      { "text": "Retreat back to the docks", "next": "retreat_docks" }
    ]
  },
  "seek_medical_attention": {
    "text": "You rush the sailor to a nearby tavern, hoping the warmth and grog will help him recover. The gruff barkeep recognizes Finn and offers to help.",
    "choices": [
      { "text": "Question the barkeep about Finn", "next": "question_barkeep" },
      { "text": "Ask the barkeep about the rumors", "next": "ask_rumors" }
    ]
  },
  "accept_map": {
    "text": "Finn explains the map leads to an underground chamber where a mysterious artifact might hold the key to stopping the Cerulean Queen.",
    "choices": [
      { "text": "Agree to help Finn", "next": "agree_help" },
      { "text": "Decline and offer to find another way", "next": "decline_help" }
    ]
  },
  "press_about_whispers": {
    "text": "Finn shudders. 'They spoke of a siren's song, luring sailors to their doom,' he whispers.",
    "choices": [
      { "text": "Ask him more about sirens", "next": "ask_sirens" },
      { "text": "Confront him about the details", "next": "confront_details" }
    ]
  },
  "follow_cautiously": {
    "text": "You inch closer to the warehouse, keeping to the shadows. You hear muffled voices arguing from inside.",
    "choices": [
      { "text": "Peek through a crack in the door", "next": "peek_door" },
      { "text": "Barge right in", "next": "barge_in" }
    ]
  },
  "gather_information": {
    "text": "You chat with a group of fishermen mending their nets. They speak of a lighthouse keeper who claims to have seen the Cerulean Queen emerge from a swirling vortex in the fog.",
    "choices": [
      { "text": "Seek out the lighthouse keeper", "next": "seek_lighthouse_keeper" },
      { "text": "Investigate the reported location of the vortex", "next": "investigate_vortex" }
    ]
  },
  "board_ship": {
    "text": "A spectral gangplank extends from the glowing ship. Do you dare step onto it?",
    "choices": [
      { "text": "Step onto the gangplank", "next": "step_gangplank" },
      { "text": "Stay on the docks and reconsider", "next": "stay_docks" }
    ]
  },
  "retreat_docks": {
    "text": "You flee from the ghostly apparition, the memory of the sailor's warning urging you back to safety.",
    "choices": [
      { "text": "Search the docks for another clue", "next": "search_docks" },
      { "text": "Head to the local tavern and gather information", "next": "tavern_information" }
    ]
  },
  "question_barkeep": {
    "text": "The barkeep squints at you. 'Finn? Haven't seen him around these parts in years. Used to be a sailor on a fine ship, the Stargazer.'",
    "choices": [
      { "text": "Ask about the Stargazer's fate", "next": "ask_stargazer" },
      { "text": "Press the barkeep for more on Finn's past", "next": "press_finn_past" }
    ]
  },
  "ask_rumors": {
    "text": "The barkeep leans in conspiratorially. 'They say the Cerulean Queen appears whenever the fog rolls in thick. Some say it carries the restless souls of those lost at sea.'",
    "choices": [
      { "text": "Inquire about ways to appease the restless souls", "next": "appease_souls" },
      { "text": "Ask about recent sightings of the Cerulean Queen", "next": "recent_sightings" }
    ]
  },
  "peek_door": {
    "text": "You carefully peek through a crack in the door. Inside, you see two men arguing over a map. One of them notices your presence and shouts, 'Who goes there?'",
    "choices": [
      { "text": "Lie and pretend to be lost", "next": "lie_lost" },
      { "text": "Reveal your identity and demand answers", "next": "reveal_identity" }
    ]
  },
  "lie_lost": {
    "text": "You quickly fabricate a story about being lost and apologize for intruding. The men exchange suspicious glances but eventually accept your explanation. They resume their conversation, unaware of your true intentions.",
    "choices": [
      { "text": "Eavesdrop on their conversation", "next": "eavesdrop" },
      { "text": "Leave the warehouse and regroup", "next": "regroup" }
    ]
  },
  "reveal_identity": {
    "text": "You reveal your identity and demand answers. The men tense up, realizing they've been discovered. Before they can react, you hear footsteps approaching from behind. It's a trap!",
    "choices": [
      { "text": "Attempt to fight your way out", "next": "fight_way_out" },
      { "text": "Surrender and negotiate for your release", "next": "surrender" }
    ]
  },
  "eavesdrop": {
    "text": "You eavesdrop on their conversation, picking up snippets of information about a hidden treasure and a secret meeting place.",
    "choices": [
      { "text": "Memorize the details and leave quietly", "next": "memorize_leave" },
      { "text": "Confront them with the newfound knowledge", "next": "confront_them" }
    ]
  },
  "regroup": {
    "text": "You leave the warehouse and regroup, deciding it's best to gather more information before taking further action.",
    "choices": [
      { "text": "Search for another clue", "next": "search_another_clue" },
      { "text": "Seek assistance from a trusted ally", "next": "seek_assistance" }
    ]
  },
  "step_gangplank": {
    "text": "With resolve, you step onto the spectral gangplank, your heart pounding with anticipation. As you ascend, the fog thickens around you, obscuring your surroundings.",
    "choices": [
      { "text": "Press forward into the unknown", "next": "press_forward" },
      { "text": "Hesitate and reconsider your decision", "next": "hesitate_reconsider" }
    ]
  },
  "stay_docks": {
    "text": "You remain on the docks, a sense of caution urging you to reconsider your decision. The spectral ship fades into the mist, leaving behind an eerie silence.",
    "choices": [
      { "text": "Return to your investigation", "next": "return_investigation" },
      { "text": "Reflect on your encounter and its implications", "next": "reflect_encounter" }
    ]
  },
  "press_forward": {
    "text": "You press forward, guided by an inner determination to unravel the mysteries that lie ahead. The ghostly whispers grow louder, echoing through the fog.",
    "choices": [
      { "text": "Face the unknown with courage", "next": "face_unknown" },
      { "text": "Doubt begins to creep in; consider turning back", "next": "consider_turning_back" }
    ]
  },
  "hesitate_reconsider": {
    "text": "Doubt clouds your mind as you hesitate on the gangplank. The voices of caution and curiosity war within you, each vying for dominance.",
    "choices": [
      { "text": "Listen to the voice of caution and retreat", "next": "listen_voice_caution" },
      { "text": "Follow your curiosity and continue forward", "next": "follow_curiosity_forward" }
    ]
  },
  "return_investigation": {
    "text": "You return to your investigation, determined to find the truth behind the mysteries of Aethelhaven. The memory of the spectral ship lingers in your mind, a puzzle yet to be solved.",
    "choices": [
      { "text": "Continue your quest for answers", "next": "continue_quest" },
      { "text": "Consider seeking help from other sources", "next": "consider_seeking_help" }
    ]
  },
  "reflect_encounter": {
    "text": "You take a moment to reflect on your encounter with the Cerulean Queen and the choices you've made. The path ahead is uncertain, but your resolve remains steadfast.",
    "choices": [
      { "text": "Prepare to face whatever challenges lie ahead", "next": "prepare_face_challenges" },
      { "text": "Regroup and strategize your next move", "next": "regroup_strategize" }
    ]
  },
  "face_unknown": {
    "text": "With courage as your guide, you venture deeper into the unknown. The fog clears, revealing the heart of the mystery...",
    "choices": [
      { "text": "Embrace the revelations and confront the truth", "next": "embrace_revelations" },
      { "text": "Steel yourself for whatever awaits", "next": "steel_yourself" }
    ]
  },
  "consider_turning_back": {
    "text": "Doubt gnaws at your resolve as you contemplate turning back. The whispers of the fog beckon you forward, but the risks loom large in your mind.",
    "choices": [
      { "text": "Push aside your doubts and press onward", "next": "push_aside_doubts" },
      { "text": "Heed the warning and retreat to safety", "next": "heed_warning_retreat" }
    ]
  },
  "listen_voice_caution": {
    "text": "You heed the voice of caution and retreat from the spectral ship. Though the mysteries of the Cerulean Queen remain unsolved, your safety takes precedence.",
    "choices": [
      { "text": "Continue your investigation from a safer vantage point", "next": "continue_investigation_safe" },
      { "text": "Seek counsel from trusted allies before proceeding", "next": "seek_counsel_allies" }
    ]
  },
  "follow_curiosity_forward": {
    "text": "Curiosity propels you forward, despite the lingering doubts. The mist parts, revealing an ethereal landscape that beckons you deeper into its embrace...",
    "choices": [
      { "text": "Embrace the unknown and continue your journey", "next": "embrace_unknown_continue" },
      { "text": "Pause and reassess your decision once more", "next": "pause_reassess_decision" }
    ]
  },
  "continue_quest": {
    "text": "You continue your quest for answers, undeterred by the mysteries that lie ahead. The truth awaits, and you are determined to uncover it, no matter the cost.",
    "choices": [
      { "text": "Forge ahead with renewed determination", "next": "forge_ahead_renewed" },
      { "text": "Take a moment to rest and gather your strength", "next": "rest_gather_strength" }
    ]
  },
  "consider_seeking_help": {
    "text": "You consider seeking help from other sources, recognizing the challenges ahead. Alone, the journey may be perilous, but with allies, you stand a greater chance of success.",
    "choices": [
      { "text": "Reach out to potential allies and form a plan", "next": "reach_out_potential_allies" },
      { "text": "Rely on your own skills and instincts to proceed", "next": "rely_own_skills_instincts" }
    ]
  },
  "embrace_revelations": {
    "text": "As the truth unfolds before you, you find yourself face to face with the heart of the mystery. The Cerulean Queen's secrets are laid bare, but with them comes a choice...",
    "choices": [
      { "text": "Make a decision that will shape the fate of Aethelhaven", "next": "make_decision_shape_fate" },
      { "text": "Pause to consider the consequences before acting", "next": "pause_consider_consequences" }
    ]
  },
  "steel_yourself": {
    "text": "With resolve as your armor, you steel yourself for whatever challenges lie ahead. The unknown may be daunting, but you are prepared to face it head-on.",
    "choices": [
      { "text": "Continue your journey with unwavering determination", "next": "continue_journey_unwavering" },
      { "text": "Take a moment to gather your thoughts and prepare", "next": "take_moment_gather_prepare" }
    ]
  },
  "push_aside_doubts": {
    "text": "Pushing aside your doubts, you press onward into the unknown. The path ahead may be fraught with danger, but you refuse to let fear dictate your actions.",
    "choices": [
      { "text": "Embrace the uncertainty and continue forward", "next": "embrace_uncertainty_continue" },
      { "text": "Stay vigilant and remain prepared for any challenges", "next": "stay_vigilant_remain_prepared" }
    ]
  },
  "embrace_uncertainty_continue": {
    "text": "With a sense of determination, you embrace the uncertainty that lies ahead. Each step forward brings you closer to the heart of the mystery, where answers await.",
    "choices": [
      { "text": "Face the challenges head-on and persevere", "next": "face_challenges_persevere" },
      { "text": "Take a moment to reflect on your journey thus far", "next": "reflect_journey_far" }
    ]
  },
  "stay_vigilant_remain_prepared": {
    "text": "You remain vigilant, aware of the dangers that lurk in the shadows. Preparedness is key as you navigate the treacherous terrain ahead, one step at a time.",
    "choices": [
      { "text": "Trust in your instincts and proceed cautiously", "next": "trust_instincts_proceed_cautiously" },
      { "text": "Seek guidance from those who have faced similar challenges", "next": "seek_guidance_similar_challenges" }
    ]
  },
  "make_decision_shape_fate": {
    "text": "With the fate of Aethelhaven hanging in the balance, you must make a decision that will shape the course of history. The weight of responsibility rests heavy upon your shoulders.",
    "choices": [
      { "text": "Choose wisely and accept the consequences", "next": "choose_wisely_accept_consequences" },
      { "text": "Pause to consult with trusted advisors", "next": "pause_consult_trusted_advisors" }
    ]
  },
  "pause_consider_consequences": {
    "text": "Before taking action, you pause to consider the consequences of your choices. The fate of Aethelhaven hangs in the balance, and every decision carries weight.",
    "choices": [
      { "text": "Proceed with caution, mindful of the potential outcomes", "next": "proceed_caution_mindful_outcomes" },
      { "text": "Seek counsel from those who have faced similar dilemmas", "next": "seek_counsel_similar_dilemmas" }
    ]
  },
  "continue_journey_unwavering": {
    "text": "With unwavering determination, you continue your journey into the heart of the mystery. The challenges ahead may be daunting, but your resolve remains unshakeable.",
    "choices": [
      { "text": "Face each obstacle with courage and perseverance", "next": "face_obstacle_courage_perseverance" },
      { "text": "Take a moment to reaffirm your commitment to the quest", "next": "moment_reaffirm_commitment_quest" }
    ]
  },
  "take_moment_gather_prepare": {
    "text": "Taking a moment to gather your thoughts, you prepare yourself for the trials ahead. The path forward may be uncertain, but you are ready to face whatever challenges arise.",
    "choices": [
      { "text": "Maintain focus and continue forward with determination", "next": "maintain_focus_continue_determination" },
      { "text": "Use this time to strategize and plan your next steps", "next": "time_strategize_plan_next_steps" }
    ]
  },
  "embrace_uncertainty_continue": {
    "text": "With a sense of determination, you embrace the uncertainty that lies ahead. Each step forward brings you closer to the heart of the mystery, where answers await.",
    "choices": [
      { "text": "Face the challenges head-on and persevere", "next": "face_challenges_persevere" },
      { "text": "Take a moment to reflect on your journey thus far", "next": "reflect_journey_far" }
    ]
  },
  "maintain_focus_continue_determination": {
    "text": "With unwavering focus, you continue forward, determined to unravel the mysteries that lie ahead. The path may be perilous, but your resolve remains steadfast.",
    "choices": [
      { "text": "Confront each challenge with courage and determination", "next": "confront_challenge_courage_determination" },
      { "text": "Remain vigilant and alert for any signs of danger", "next": "remain_vigilant_alert_danger" }
    ]
  },
  "time_strategize_plan_next_steps": {
    "text": "You use this time to strategize and plan your next steps carefully. The challenges ahead require careful consideration, and you are determined to face them with a clear mind.",
    "choices": [
      { "text": "Formulate a plan of action and proceed with confidence", "next": "formulate_plan_action_proceed_confidence" },
      { "text": "Consult with allies to gather additional insights", "next": "consult_allies_gather_insights" }
    ]
  },
  "reflect_journey_far": {
    "text": "You take a moment to reflect on your journey thus far, marveling at how far you've come. The path ahead may be uncertain, but your resolve has carried you through every challenge.",
    "choices": [
      { "text": "Draw strength from past experiences and press onward", "next": "draw_strength_press_onward" },
      { "text": "Use this moment of reflection to recharge and rest", "next": "moment_reflection_recharge_rest" }
    ]
  }
}
