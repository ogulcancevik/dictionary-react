const WordSection = ({ data } : {
  data: any
}) => {
  if (data.length) return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-5">
        <span className="font-mono font-bold text-xl dark:text-white">Noun</span>
        <div className="h-[2px] w-full bg-neutral-100 rounded-full" />
      </div>
      <ul className="list-disc flex flex-col gap-3">
        {
          data.map((item: any) => {
            return (
              item?.definitions.map((item: any, index: number) => {
                return (
                  <li key={index} className='text-[#a245ed]'>
                    <span className="text-neutral-500 dark:text-white">{item.definition}</span>
                  </li>
                )
              }
              )
            )
          })
        }
      </ul>
    </div>
  )
  return null
}

export default WordSection
