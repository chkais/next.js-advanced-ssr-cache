import React from 'react'
import Dashboard from "../components/Dashboard";
import Link from 'next/link';


const PostLink = props => (
    <li>
        <Link href="/p/[id]" as={`/p/${props.id}`}>
            <a>{props.id}</a>
        </Link>
    </li>
);

const Home = () => (
    <React.Fragment>
        <h1>Hello</h1>
        <ul>
            <PostLink id="hello-nextjs" />
            <PostLink id="learn-nextjs" />
            <PostLink id="deploy-nextjs" />
        </ul>
        <Dashboard/>
    </React.Fragment>
)

export default Home
