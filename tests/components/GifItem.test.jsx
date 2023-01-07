import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en <GiftItem />', () => {
    const title='Super smash';
    const url='https://supersmashbros.com/link.jpg';

    test('Debe hacer match con el snapshot', () => { 
            const { container } = render(<GifItem title={title} url={url} />);
            expect(container).toMatchSnapshot();
         });

    test('debe mostrar imagen con URL y ALT indicados', () => { 
        
        render(<GifItem title={title} url={url} />);
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
     });

     test('debe mostrar el titulo en el componente', () => { 
        
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
        
     });
});