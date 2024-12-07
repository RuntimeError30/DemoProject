// "use client"

// import * as React from "react"
// import { BarChart3, Grid2X2, LineChart, Maximize2, Menu, MinusSquare, MoreVertical, Network, Plus, SplitSquareHorizontal, X } from 'lucide-react'

// import { Button } from "@/components/ui/button"
// import {
//   ResizableHandle,
//   ResizablePanel,
//   ResizablePanelGroup,
// } from "@/components/ui/resizable"
// import { ScrollArea } from "@/components/ui/scroll-area"
// import { Separator } from "@/components/ui/separator"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// export default function StatisticalAnalysis() {
//   const [selectedCell, setSelectedCell] = React.useState<string | null>(null)
//   const [data, setData] = React.useState<Record<string, string>>({})

//   // Generate column headers A-Z
//   const columns = ['A', 'B', 'C']
  
//   // Generate rows 1-100
//   const rows = Array.from({ length: 100 }, (_, i) => i + 1)

//   const handleCellClick = (cellId: string) => {
//     setSelectedCell(cellId)
//   }

//   const handleCellChange = (cellId: string, value: string) => {
//     setData(prev => ({
//       ...prev,
//       [cellId]: value
//     }))
//   }

//   return (
//     <TooltipProvider>
//       <div className="flex h-screen flex-col">
//         {/* Window Title Bar */}
//         <div className="flex h-10 items-center justify-between border-b bg-muted px-4">
//           <div className="flex items-center gap-2">
//             <Menu className="h-4 w-4" />
//             <span className="text-sm">Untitled</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <Button variant="ghost" size="icon">
//               <MinusSquare className="h-4 w-4" />
//             </Button>
//             <Button variant="ghost" size="icon">
//               <Maximize2 className="h-4 w-4" />
//             </Button>
//             <Button variant="ghost" size="icon">
//               <X className="h-4 w-4" />
//             </Button>
//           </div>
//         </div>

//         {/* Main Navigation */}
//         <Tabs defaultValue="analyses" className="flex-none">
//           <div className="flex items-center border-b px-4">
//             <TabsList className="h-10 w-fit">
//               <TabsTrigger value="variables">Variables</TabsTrigger>
//               <TabsTrigger value="data">Data</TabsTrigger>
//               <TabsTrigger value="analyses">Analyses</TabsTrigger>
//               <TabsTrigger value="edit">Edit</TabsTrigger>
//             </TabsList>
//           </div>
//         </Tabs>

//         {/* Toolbar */}
//         <div className="flex items-center gap-6 border-b px-6 py-2">
//           <Tooltip>
//             <TooltipTrigger asChild>
//               <Button variant="ghost" size="icon" className="h-16 w-16 flex-col gap-1">
//                 <BarChart3 className="h-6 w-6" />
//                 <span className="text-xs">Exploration</span>
//               </Button>
//             </TooltipTrigger>
//             <TooltipContent>Exploration</TooltipContent>
//           </Tooltip>
//           <Tooltip>
//             <TooltipTrigger asChild>
//               <Button variant="ghost" size="icon" className="h-16 w-16 flex-col gap-1">
//                 <SplitSquareHorizontal className="h-6 w-6" />
//                 <span className="text-xs">T-Tests</span>
//               </Button>
//             </TooltipTrigger>
//             <TooltipContent>T-Tests</TooltipContent>
//           </Tooltip>
//           <Tooltip>
//             <TooltipTrigger asChild>
//               <Button variant="ghost" size="icon" className="h-16 w-16 flex-col gap-1">
//                 <Grid2X2 className="h-6 w-6" />
//                 <span className="text-xs">ANOVA</span>
//               </Button>
//             </TooltipTrigger>
//             <TooltipContent>ANOVA</TooltipContent>
//           </Tooltip>
//           <Tooltip>
//             <TooltipTrigger asChild>
//               <Button variant="ghost" size="icon" className="h-16 w-16 flex-col gap-1">
//                 <LineChart className="h-6 w-6" />
//                 <span className="text-xs">Regression</span>
//               </Button>
//             </TooltipTrigger>
//             <TooltipContent>Regression</TooltipContent>
//           </Tooltip>
//           <Tooltip>
//             <TooltipTrigger asChild>
//               <Button variant="ghost" size="icon" className="h-16 w-16 flex-col gap-1">
//                 <Network className="h-6 w-6" />
//                 <span className="text-xs">Factor</span>
//               </Button>
//             </TooltipTrigger>
//             <TooltipContent>Factor</TooltipContent>
//           </Tooltip>
//           <div className="ml-auto">
//             <Tooltip>
//               <TooltipTrigger asChild>
//                 <Button size="icon">
//                   <Plus className="h-4 w-4" />
//                 </Button>
//               </TooltipTrigger>
//               <TooltipContent>Add Module</TooltipContent>
//             </Tooltip>
//           </div>
//         </div>

//         {/* Main Content */}
//         <ResizablePanelGroup direction="horizontal" className="flex-1">
//           {/* Spreadsheet Panel */}
//           <ResizablePanel defaultSize={50}>
//             <ScrollArea className="h-full">
//               <div className="grid">
//                 {/* Header Row */}
//                 <div className="sticky top-0 z-10 grid auto-cols-fr grid-flow-col bg-muted">
//                   <div className="border-r border-b p-2 text-center text-sm font-medium" />
//                   {columns.map((col) => (
//                     <div
//                       key={col}
//                       className="border-r border-b p-2 text-center text-sm font-medium"
//                     >
//                       {col}
//                     </div>
//                   ))}
//                 </div>
                
//                 {/* Data Rows */}
//                 {rows.map((row) => (
//                   <div key={row} className="grid auto-cols-fr grid-flow-col">
//                     <div className="sticky left-0 z-10 border-r border-b bg-muted p-2 text-center text-sm">
//                       {row}
//                     </div>
//                     {columns.map((col) => {
//                       const cellId = `${col}${row}`
//                       return (
//                         <div
//                           key={cellId}
//                           className="relative border-r border-b p-2"
//                           onClick={() => handleCellClick(cellId)}
//                         >
//                           <input
//                             type="text"
//                             className="absolute inset-0 w-full border-none bg-transparent p-2 focus:outline-none focus:ring-2 focus:ring-primary"
//                             value={data[cellId] || ""}
//                             onChange={(e) => handleCellChange(cellId, e.target.value)}
//                           />
//                         </div>
//                       )
//                     })}
//                   </div>
//                 ))}
//               </div>
//             </ScrollArea>
//           </ResizablePanel>
          
//           <ResizableHandle />
          
//           {/* Output Panel */}
//           <ResizablePanel defaultSize={50}>
//             <div className="flex h-full items-center justify-center">
//               <div className="text-center text-muted-foreground">
//                 <p>No analyses to display</p>
//                 <p className="text-sm">Select an analysis from the toolbar above to begin</p>
//               </div>
//             </div>
//           </ResizablePanel>
//         </ResizablePanelGroup>

//         {/* Status Bar */}
//         <div className="flex h-8 items-center justify-between border-t bg-muted px-4 text-xs text-muted-foreground">
//           <div className="flex items-center gap-4">
//             <span>Ready</span>
//             <Separator orientation="vertical" className="h-4" />
//             <span>Filters: 0</span>
//           </div>
//           <div className="flex items-center gap-4">
//             <span>Row count: 0</span>
//             <span>Filtered: 0</span>
//             <span>Deleted: 0</span>
//             <span>Added: 0</span>
//             <span>Cells edited: 0</span>
//           </div>
//         </div>
//       </div>
//     </TooltipProvider>
//   )
// }

