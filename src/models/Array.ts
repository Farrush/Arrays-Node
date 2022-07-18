

const items = [
    {
    name:"Node"},
    {
    name:"Dragonborn"},
    {
    name:"Hence"},
    {
    name:"Narrow"},
    {
    name:"Queer"},
    {
    name:"Hitherto"},
    {
    name:"Unnamable"},
    {
    name:"Thu'um"},
]

export const Data = {
    getAll:()=>{
        return items;
    },
    pushItem:(name: string)=>{

        items.push({name: name})
        
    },
    unshiftItem:(name: string)=>{

        items.unshift({name: name})
        
    },
    removeItem:(index: number)=>{
        items.splice(index,1)
    },
    removeRange:(start:number,end:number)=>{

        items.splice(start,end)
    }
}