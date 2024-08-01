import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home', () => {
    it('renders a heading', async () => {
        const jsx = await Home({ pageProps: { name: 'test person' } })
        render(jsx)

        const heading = screen.getByRole('heading', { level: 1 })

        expect(heading).toBeInTheDocument()
        expect(heading).toHaveTextContent('Your Name')
    })
})
