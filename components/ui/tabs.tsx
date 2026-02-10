'use client'

import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn('flex flex-col gap-4', className)}
      {...props}
    />
  )
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {

  const listRef = React.useRef<HTMLDivElement>(null)
  const [indicator, setIndicator] = React.useState({ width: 0, left: 0 })

  React.useEffect(() => {
    const updateIndicator = () => {
      const activeTab = listRef.current?.querySelector(
        '[data-state="active"]'
      ) as HTMLElement | null

      if (activeTab && listRef.current) {
        const listRect = listRef.current.getBoundingClientRect()
        const tabRect = activeTab.getBoundingClientRect()

        setIndicator({
          width: tabRect.width,
          left: tabRect.left - listRect.left,
        })
      }
    }

    updateIndicator()

    const observer = new MutationObserver(updateIndicator)
    if (listRef.current) {
      observer.observe(listRef.current, {
        attributes: true,
        subtree: true,
        attributeFilter: ['data-state'],
      })
    }

    window.addEventListener('resize', updateIndicator)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', updateIndicator)
    }
  }, [])

  return (
    <TabsPrimitive.List
      ref={listRef}
      data-slot="tabs-list"
      className={cn(
        'relative inline-flex w-full ml-8 border-b-1 justify-start gap-6 rounded-none h-auto p-0',
        className
      )}
      {...props}
    >
      {props.children}

      {/* Sliding Blue Indicator */}
      <motion.div
        className="absolute bottom-[-2px]  h-[3px] bg-[#FF5555] rounded-full left-0"
        animate={{
          width: indicator.width,
          x: indicator.left,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />
    </TabsPrimitive.List>
  )
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        `
        relative  py-2 text-sm font-medium
        text-gray-400 bg-transparent border-none rounded-none
        hover:text-[#FF5555]
        data-[state=active]:text-[#FF5555]
        `,
        className
      )}
      {...props}
    />
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn('flex-1 outline-none pt-4', className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
