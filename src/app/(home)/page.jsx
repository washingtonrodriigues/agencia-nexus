"use client"

import Banners from '../banners/page'
import About from '../about/page'
import Solutions from '../solutions/page'
import Customers from '../customers/page'
import Experts from '../experts/page'
import Contact from '../contact/page'
import WhatsappBtn from "@/components/ui/wppbutton";
import { useState } from 'react'
import { Popup } from '@typebot.io/nextjs';


const Home = () => {
    const [showTypebot, setShowTypebot] = useState(false);

    return (
        <div>
            <Banners />
            <About />
            <Solutions />
            <Customers />
            <Experts />
            <Contact />
            <WhatsappBtn onclick={() => setShowTypebot(true)} />
            <Popup
                typebot="my-typebot-8qsxujy"
                isOpen={showTypebot}
                onClose={() => setShowTypebot(false)}
            />
        </div>
    );
}

export default Home;