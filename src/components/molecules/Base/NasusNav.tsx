import React, { FC } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Logo from 'src/components/molecules/Base/logo';
import SolQuote from 'src/components/molecules/SolQuote';
import ThemeSwitcher from '../ThemeSwitcher';

const JasesNav: FC = React.memo(() => {

  // const [collections, setCollections] = useState<Collection.Collection[]>([])

  // useEffect(() => {
  //   async function getAndSet() {
  //     const url = `${BASE_API_URL}/collection`
  //     const response = await fetch(url)
  //     const cs: Collection.Collection[] = (await response.json()).filter(x => x.blockchain === 'eth')
  //     setCollections(cs)
  //   }

  //   getAndSet()
  // }, [])

  return (
    <Navbar fixed="top" className="bg-black">
      <Container>
        <Logo />
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav me-auto="true">
            <NavDropdown
              title={<span className="text-gray-400">Collections</span>}
              id="basic-nav-dropdown"
            >
              {collections.map(c =>
                <NavDropdown.Item href={`/collection/${c.solanartNameInternal}`} key={c.solanartNameInternal}>
                  {c.name}
                </NavDropdown.Item>
              )}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse> */}

        <Nav className="justify-content-end items-center gap-4" activeKey="/home">
          <Nav.Item className="mt-0 ml-10">
            <SolQuote />
          </Nav.Item>
          <Nav.Item>
          <ThemeSwitcher />
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  )
});

JasesNav.displayName = 'JasesNav';

export default JasesNav;
