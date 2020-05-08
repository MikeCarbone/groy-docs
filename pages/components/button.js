import {
    BetweenFlex,
    Button,
    CenterFlex,
    Copy,
    Heading,
    Section,
    VertSpace,
    Wrapper
} from 'groy';
import Head from '../../utils/headLinks';
import Header from '../../components/header';
import Link from 'next/link';

const Page = () => (
    <>
        <Head />
        <Header />
        <Wrapper>
            <CenterFlex>
                <div>
                    <VertSpace />
                    <Heading>Button</Heading>
                    <VertSpace />
                </div>
            </CenterFlex>
            <Section>
                <VertSpace />
                <Button to="#">This is an example button</Button>
                <VertSpace />
            </Section>
            <Section>
                <VertSpace />
                <Copy>
                    Button component can be imported with <code>import {'{'} Button {'}'} from 'groy';</code>
                </Copy>
                <Copy>
                    You can then use it like this: <code>{"<Button to='/'>Go Home</Button>"}</code>
                </Copy>
                <VertSpace />
            </Section>
            <Section>
                <VertSpace />
                <Heading size="1">Props</Heading>
                <VertSpace />
                <Heading size="3">to | type: string</Heading>
                <Copy>The href of the underlying link; where clicking the button where take you.</Copy>
                <Copy>So <code>{"<Button to='https://google.com'>Go to google</Button>"}</code> will render: <Button to='https://google.com'>Go to google</Button></Copy>
                <VertSpace />
                <Section>
                    <VertSpace />
                    <Heading size="3">space | type: boolean</Heading>
                    <Copy>Adds horizontal space for a list of buttons.</Copy>
                    <Copy>So <code>{"<Button space to='#'>Button</Button>"}</code>, when used twice in a container, will render:
                        <div>
                            <Button space to='#'>Button spaced</Button>
                            <Button space to='#'>Button spaced</Button>
                        </div>
                    </Copy>
                    <VertSpace />
                </Section>
                <Section>
                    <VertSpace />
                    <Heading size="3">className | type: string</Heading>
                    <Copy>Passes any classes downwards to the component.</Copy>
                    <VertSpace />
                </Section>
            </Section>
        </Wrapper>
    </>
);

export default Page;
