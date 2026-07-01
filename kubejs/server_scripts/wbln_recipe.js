ServerEvents.recipes(event => {
  event.shaped(
    'webdisplays:linker',
    [
      ' S ',
      'BAE',
      ' D '  
    ],
    {
      D: 'tfmg:plastic_sheet',
      S: 'create:transmitter',
      A: 'tfmg:circuit_board',
      B: 'powergrid:resistor',
      E: 'powergrid:capacitor'
    }
  )
})