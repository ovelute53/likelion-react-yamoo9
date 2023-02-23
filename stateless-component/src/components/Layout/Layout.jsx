import { Header } from "./Header"
import { Footer } from "./Footer"


export function BaseLayout ({children}) {
  return(
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>)
}
// export function OnlyHeaderLayout ({children}) {
//   return(
//   <>
//     <Header />
//     <main>{children}</main>
//   </>)
// }
// export function WithSidebarLayout ({children}) {
//   return(
//   <>
//     <Header />
//     <main>{children}</main>
//     <Footer />
//   </>)
// }