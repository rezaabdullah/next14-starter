// client component parent child server component issue
"use client"
const ClientSideProviderTest = ({children}) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default ClientSideProviderTest;