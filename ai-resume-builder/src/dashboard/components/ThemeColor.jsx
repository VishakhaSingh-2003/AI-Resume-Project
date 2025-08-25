import React from 'react'
import { Button } from '@/components/ui/button'
import { LayoutGrid } from 'lucide-react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

function ThemeColor() {
    const colors=[
        "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#A133FF",
        "#33FFA1", "#FF7133", "#71FF33", "#7133FF", "#FF3371",
        "#33FF71", "#3371FF", "#A1FF33", "#33A1FF", "#FF5733",
        "#5733FF", "#33FF5A", "#5A33FF", "#FF335A", "#335AFF"
    ]
    return(
      <Popover>
  <PopoverTrigger asChild><Button
            variant="outline"
            size="sm"
            className=" hover:scale-105 transition-transform bg-white hover:bg-white text-black flex gap-2">
            <LayoutGrid />
            Theme
          </Button></PopoverTrigger>
  <PopoverContent>
    {colors.map((item,index)=>(
        <div
        className='h-5, w-5'
        style={{
             background:item
        }}>
         
        </div>
    ))}
  </PopoverContent>
</Popover>
    )
}
export default ThemeColor