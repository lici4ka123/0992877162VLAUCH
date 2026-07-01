ServerEvents.recipes(event => {
  event.shaped(
    'webdisplays:minepad',
    [
      'ECE',
      'DSD',
      'BAB'  
    ],
    {
      D: 'tfmg:plastic_sheet',
      S: 'webdisplays:screen',
      A: 'tfmg:circuit_board',
      B: 'tfmg:transistor_item',
      C: 'powergrid:diode',
      E: 'tfmg:capacitor_item'
    }
  )
})