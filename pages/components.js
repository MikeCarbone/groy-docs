import {
    BetweenFlex,
    Button,
    CenterFlex,
    Footer,
    Heading,
    VertSpace,
    Wrapper
} from 'groy';
import Head from '../utils/headLinks';
import Header from '../components/header';
import SecondaryButton from '../components/secondary-button';
import Link from 'next/link';

const Home = () => (
    <>
        <Head />
        <Header />
        <Wrapper>
            <CenterFlex>
                <div>
                    <VertSpace />
                    <Heading>Components</Heading>
                </div>
            </CenterFlex>
            <BetweenFlex>
                <SecondaryButton to="/components/heading">Heading</SecondaryButton>
                <SecondaryButton to="/components/button">Button</SecondaryButton>
            </BetweenFlex>
        </Wrapper>
    </>
);

export default Home;
