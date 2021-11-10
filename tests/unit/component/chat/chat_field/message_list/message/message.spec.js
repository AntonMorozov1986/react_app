import '@testing-library/jest-dom';
import { renderWithRedux } from '@tests/utils/render_with_redux';
import { Message } from '@components';

let state = null;

beforeEach(() => {
    state = {
        user: {
            id: 'test-id-1',
            displayName: 'Test User',
        },
    };
});

describe('Message component', () => {
    it('should render Message with prop message', () => {
        const mockMessage = { author: 'TestAuthor', text: 'test text' };
        const { container } = renderWithRedux(<Message message={mockMessage}/>, {
            initialState: state,
        });

        const nodes = [...container.querySelectorAll('.message')];
        expect(nodes[0].toHaveTextContent(mockMessage.author));
        expect(nodes[1].toHaveTextContent(mockMessage.text));
    });
});
