ServerEvents.recipes(event => {
  event.shaped(
    'webdisplays:screen', // Результат
    [
      'DDD', // Перший рядок
      'DSD', // Другий рядок
      'DDD'  // Третій рядок
    ],
    {
      D: 'tfmg:plastic_sheet', // Пластик з TFMG
      S: 'vista:television'    // Телевізор з Vista
    }
  )
})