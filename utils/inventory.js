import { v4 as uuid } from 'uuid'

let inventory = [
  {
    categories: ['Auto-Regulated'], name: 'Fully Regulated Routine', price: '00', image: '/products/couch1.png', description: 'This routine will adapt to your training volume based on your inputs and fully regulate.', brand: 'Jason Bourne', currentInventory: 4 },
    {
      categories: ['Upper Focused'], name: 'Jacked 1.0', price: '2', image: '/products/couch1.png', description: 'This program is focused to increase your upper body size. Lower body will have a lower emphasis.', brand: 'Janmejay', currentInventory: 4 },
      {
        categories: ['Lower Focused'], name: 'Tree Trunks', price: '2', image: '/products/couch1.png', description: 'Get tree trunk legs, and a bubble butt.', brand: 'Janmejay', currentInventory: 4 },

        {
          categories: ['Power Lifting'], name: '4 Day Powerlifting Routine', price: '2', image: '/products/couch1.png', description: 'Strength is a skill. A skill that can improve and be refined. This plan is meant to do exactly that.', brand: 'Janmejay Buranpuri', currentInventory: 4 }
  

  ]
inventory.map(i => {
  i.id = uuid()
  return i
})

export default inventory