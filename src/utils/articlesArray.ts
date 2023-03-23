export type Articles = {
  id:number
  image:string
  title: string
  description: string
  category:string
}

const articlesArray: Articles[] = [
  {
    id:0,
    image:'/images/moraine.jpg',
    title:'Moraine lake, Canada',
    description:'Moraine Lake is a glacially-fed lake located in Banff National Park in Alberta, Canada. It is known for its crystal clear turquoise blue water and stunning mountain backdrop, and is one of the most photographed lakes in Canada.',
    category: "discovery",
  },
]

export default articlesArray