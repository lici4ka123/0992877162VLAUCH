ServerEvents.recipes(event => {
  event.shaped(
    'webdisplays:screencfg',
    [
      'DS'  
    ],
    {
      D: 'webdisplays:screen',
      S: 'create_tweaked_controllers:tweaked_linked_controller'    
    }
  )
})