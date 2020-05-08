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
                    <Heading>Heading</Heading>
                    <VertSpace />
                </div>
            </CenterFlex>
            <Section>
                <VertSpace />
                <Heading size="1">Example Heading 1</Heading>
                <Heading size="2">Example Heading 2</Heading>
                <Heading size="3">Example Heading 3</Heading>
                <VertSpace />
            </Section>
            <Section>
                <VertSpace />
                <Copy>
                    Heading component can be imported with <code>import {'{'} Heading {'}'} from 'groy';</code>
                </Copy>
                <Copy>
                    You can then use it like this: <code>{"<Heading>This is a header</Heading>"}</code>
                </Copy>
                <VertSpace />
            </Section>
            <Section>
                <VertSpace />
                <Heading size="1">Props</Heading>
                <VertSpace />
                <Heading size="3">size | type: string</Heading>
                <Copy>Accepts 1, 2 or 3 to render their corresponding height.</Copy>
                <Copy>So <code>{"<Heading size='2'>AHH</Heading>"}</code> will render: <Heading size="2">AHH</Heading></Copy>
                <VertSpace />
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
