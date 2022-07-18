import {Request, Response} from 'express'
import { Data } from '../models/Array'
type items ={
    name:string
    pos:number

}
export const home = (req: Request, res: Response)=>{

    let data = Data.getAll()
    
    let item: items[] = []
        data.forEach((value,index)=>{

            item.push({name: value.name, pos: index})
        })

    res.render('pages/home',{
        item
    })
}

export const pushPost = (req: Request, res: Response)=>{

    if((req.body.item as string) != ""){
        Data.pushItem(req.body.item)
        res.redirect('/')
    }else{
        res.redirect('/')       
    }


}
export const unshiftPost = (req: Request,res: Response)=>{

    if((req.body.item as string) != ""){
        Data.unshiftItem(req.body.item)
        res.redirect('/')
    }else{
        res.redirect('/')       
    }
}

export const splicePost = (req: Request, res: Response)=>{

    Data.removeItem(req.body.options)
    res.redirect('/')
}

export const spliceRangePost = (req: Request, res: Response)=>{
    
    let start = parseInt(req.body.start as string)
    let end = parseInt(req.body.end as string)
    if(start === 0){
        end = end + 1
    }
    if(end > 1 && start < end){
        end = end + 1 - start
    }else if(start > 1 && end < start){
        start = start + 1 - end
    }
    if(start>end){
        let e = start
        start = end
        end = e
    }
    if(start === end){
        end = 1
    }


    Data.removeRange(start,end)

    res.redirect('/')
}


