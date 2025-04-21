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
  }
};
