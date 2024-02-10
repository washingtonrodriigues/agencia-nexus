"use client"

import { Separator } from '@/components/ui/separator';
import HeaderProduct from '../../../components/HeaderProduct/index'
import SectionBlack from '../../../components/SectionBlack/index'
import SectionWhite from '../../../components/SectionWhite/index'
import Form from '../../../components/Form/index'
import benefits from './benefits.json'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { useEffect } from 'react';
import Link from 'next/link';
import { ChevronRightIcon } from 'lucide-react';
import styles from './styles.module.css'

const GoogleADS = () => {
    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
            .swiper-pagination-bullet {
                position: relative;
                background-color: #525252;
                opacity: .6;
                width: 10px;
                height: 10px;
                border-radius: 50%;
            }
    
            .swiper-pagination-bullet-active {
                background-color: #007AFF;
                opacity: 1;
            }
    
            .swiper-pagination-bullet::before {
                content: "";
                width: 0;
                height: 0;
                background: rgba(0, 0, 0, 0);
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                border-radius: 50%;
                border: 2px solid #007AFF; 
                transition: all 0.2s ease-in-out;
                opacity: 0;
            }
    
            .swiper-pagination-bullet-active::before {
                width: 20px; 
                height: 20px; 
                opacity: 1;
            }

            .swiper-button-next::after, .swiper-button-prev::after {
                font-size: 26px;
                
            }
        `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, []);

    return (
        <div>
            <HeaderProduct src1="/google.png" src2="/googleads.png" title="Google ADS" bg="/meta-bg.png" />
            <section className='bg-white text-black py-[30px] px-[20px] h-auto'>
                <h2 className="text-[2rem] font-ubuntu leading-10">Aumente suas <span className="text-[#0078ac]">vendas</span> com a <span className="text-[#0078ac]">estratégia</span> certa</h2>
                <div className="mt-[30px] text-justify font-poppins flex flex-col gap-5">
                    <p>Hoje em dia, ter visiblidade na internet é algo crucial para qualquer empresa. Se você ainda não faz anúncios na internet, talvez você esteja impedindo o crescimento do seu negócio e, consequentemente, deixando de ganhar dinheiro.</p>
                    <p>Se aumentar a visibilidade da sua marca, atrair mais clientes em potencial e escalar o seu negócio para outro patamar for uma vontade sua, nós podemos te ajudar. Através do Google ADS, nós conseguimos posicionar o seu negócio da maneira correta nos principais mecanismos de busca, como o Google, atraindo o público certo, transformando-os em potenciais clientes e aumentando as conversões.</p>
                    <p>Aqui na Nexus, compreendemos a importância de cada anúncio. Ao confiar em nossa experiência, você não apenas economiza tempo, mas também garante que cada investimento retorne em resultados palpáveis. Deixe-nos ser parte do seu sucesso online, impulsionando suas vendas e levando o seu negócio a novos horizontes.</p>
                </div>
            </section>
            <Separator style={{ opacity: ".5" }} />
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                navigation={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination, Navigation]}
            >
                {benefits.map(item => (
                    <SwiperSlide key={item} className={styles.slider_item}>
                        <Image src={item.image} alt={item.title} width={60} height={0} sizes='' />

                        <h2 className={styles.card_title}>{item.title}</h2>
                        <p className={styles.card_text}>{item.text}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
            <SectionBlack src="/meta-img1.png" title="Identificamos o seu " titleSpan="público-alvo" text="Público-alvo é o público ideal para o seu negócio, ou seja, pessoas têm um grande potencial de se tornarem seus clientes. Nossa missão é te ajudar a indentificar o perfil desse público, pois as suas chances de fechar negócio ou efetivar uma venda triplicam quando direcionamos os anúncios para as pessoas certas." />

            <SectionWhite src="/meta-img2.png" title="Campanhas de acordo com " titleSpan="o seu objetivo" text="Os anúncios são totalmente adaptados para trazer os melhores resultados que acordo com os seus objetivos, sejam eles reconhecimento de marca, maior visibilidade, mais cadastros, aumento das vendas, tráfego para seu site e muito mais. É possível segmentar o público por idade, gênero, interesses, localização entre várias outras formas para obter a melhor perfomance nos anúncios." />

            <SectionBlack src="/google-img.svg" title="Definimos as " titleSpan="melhores estratégias" text="No Google Ads, focamos em maximizar a eficácia dos seus anúncios de maneira direta e eficiente. Dispensamos a necessidade de elaborar criativos complexos, oferecendo uma abordagem simplificada e impactante. Nossa estratégia envolve mensagens claras, chamadas para ação diretas e a escolha de formatos publicitários que melhor se adequam aos seus objetivos." />

            <SectionWhite src="/meta-img4.png" title="Analisamos as " titleSpan="métricas das campanhas" text=" Monitoramos de perto o desempenho das suas campanhas, analisando os resultados obtidos e ajustando estratégias conforme necessário para impulsionar a eficácia e maximizar o retorno sobre o investimento. Revisamos os detalhes e fazemos relatórios periódicos com a performance e resultados das campanhas." />

            <div style={{ margin: "30px 0" }} className='flex flex-col items-center'>
                <h2 className="font-ubuntu text-[2rem] text-center mb-[50px]">Vamos <span className="text-[#42c6ff]">alavancar suas vendas</span> no mundo digital?</h2>
                <Image src="/google-img2.png" alt='Aumentar vendas' width={350} height={0} sizes='' />
                <Link className="font-poppins flex border-[2px] border-solid border-[#42c6ff] rounded-[20px] w-[200px] justify-center items-center p-[10px] mt-[30px]" href="#div-form">Sim, eu quero! <ChevronRightIcon /></Link>
            </div>
            <div id='div-form'>
                <Form />
            </div>
        </div>
    );
}

export default GoogleADS;