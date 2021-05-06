import Container from './container'

export default function Footer() {
  return (
    <footer className="p-3 mt-10 text-center bg-gray-800 flex-column">
      <Container>
          <div className="flex flex-row justify-evenly">
            <p>Copyright © 2021  Richard McSorley. All rights reserved. <a href="https://etherscan.io/address/0x351016d3ec753db8e98a783cf51c8d6a4a8af151">Token Contract</a></p>
          </div>
      </Container>
    </footer>
  )
}
