import { Box } from "@mui/material"
import Head from "next/head"
import { FC } from "react"
import { UiProvider } from "../../context/ui"
import { Navbar, Sidebar } from "../ui"

interface Props {
    title?: string
}

export const Layout: FC<Props> = ({title = 'OpenJira', children}) => {
  return (
    <UiProvider>
      <Box sx={{ flexGrow: 1 }}>
          <Head>
              <title>{title}</title>
          </Head>
          <Navbar/>
          <Sidebar/>
          <Box sx={{ padding: '10px 20px' }}>
              { children }
          </Box>
      </Box>
    </UiProvider>
  )
}
