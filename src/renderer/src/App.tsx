import { Content, DraggableBar, RootLayout, Sidebar } from '@/components'

function App(): JSX.Element {
  return (
    <>
      <DraggableBar className="border-4 border-green-500" />
      <RootLayout>
        <Sidebar className="p-2 border-4 border-red-500">Expenses</Sidebar>
        <Content className="p-2 border-4 border-blue-500">Breakdown</Content>
      </RootLayout>
    </>
  )
}

export default App
