"use client"

import { Separator } from '@/components/ui/separator';
import HeaderProduct from '../../../components/HeaderProduct/index'
import SectionBlack from '../../../components/SectionBlack/index'
import SectionWhite from '../../../components/SectionWhite/index'
import Form from '../../../components/Form/index'
import styles from './styles.module.css'
import benefits from './benefits.json'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronRightIcon } from 'lucide-react';
import FirstSectionProduct from '@/components/FirstSectionProduct';
import LastSectionProduct from '@/components/LastSectionProduct';

const MetaADS = () => {

    const [hovered, setHovered] = useState(false)

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
                border: 2px solid #007AFF; /* Mude a cor da borda conforme necessário */
                transition: all 0.2s ease-in-out;
                opacity: 0;
            }
    
            .swiper-pagination-bullet-active::before {
                width: 20px; /* Ajuste conforme necessário para o tamanho do círculo ao redor da bullet ativa */
                height: 20px; /* Ajuste conforme necessário para o tamanho do círculo ao redor da bullet ativa */
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
            <HeaderProduct src1="/meta.png" src2="/metaads.png" title="Meta ADS" bg="/bg-header-traffic-page.jpg" />
            <FirstSectionProduct title="Aumente suas" span1="vendas" title_continuation="com a" span2="estratégia" title_continuation2="certa" p1="Hoje em dia, quase todas as pessoas possuem redes sociais. Se você não faz anúncios na internet, talvez você esteja impedindo o crescimento do seu negócio e, consequentemente, deixando de ganhar dinheiro." p2="Se aumentar a visibilidade da sua marca, atrair mais clientes em potencial e escalar o seu negócio para outro patamar for uma vontade sua, nós podemos te ajudar. Através do Meta ADS, nós conseguimos posicionar o seu negócio da maneira correta nas principais redes sociais, como Instagram e Facebook, atraindo o público certo, transformando-os em potenciais clientes e aumentando as conversões." p3="Aqui na Nexus, compreendemos a importância de cada anúncio. Ao confiar em nossa experiência, você não apenas economiza tempo, mas também garante que cada investimento retorne em resultados palpáveis. Deixe-nos ser parte do seu sucesso online, impulsionando suas vendas e levando o seu negócio a novos horizontes." />

            <Separator style={{ opacity: ".5" }} />
            {/* Slider in mobile version */}
            <div className='lg:hidden'>
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
                            <h2 className="font-bold text-[1.3rem]">{item.title}</h2>
                            <p className="text-center mb-[25px] max-w-[300px]">{item.text}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            {/* Static cards */}
            <div className='bg-white hidden lg:flex justify-evenly text-black py-[50px]'>
                {benefits.map(item => (
                    <div key={item} className='flex justify-center items-start w-[250px] gap-5'>
                        <Image src={item.image} alt={item.title} width={40} height={0} sizes='' />
                        <div className='flex flex-col gap-3'>
                            <h2 className="font-bold text-[1.3rem]">{item.title}</h2>
                            <p className=" mb-[25px] max-w-[300px]">{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <SectionBlack src="/meta-img1.png" title="Identificamos o seu " titleSpan="público-alvo" text="Público-alvo é o público ideal para o seu negócio, ou seja, pessoas têm um grande potencial de se tornarem seus clientes. Nossa missão é te ajudar a indentificar o perfil desse público, pois as suas chances de fechar negócio ou efetivar uma venda triplicam quando direcionamos os anúncios para as pessoas certas." />

            <SectionWhite src="/meta-img2.png" title="Campanhas de acordo com " titleSpan="o seu objetivo" text="Os anúncios são totalmente adaptados para trazer os melhores resultados que acordo com os seus objetivos, sejam eles reconhecimento de marca, maior visibilidade, mais cadastros, aumento das vendas e muito mais. É possível segmentar o público por idade, gênero, interesses, localização entre várias outras formas para obter a melhor perfomance nos anúncios." />

            <SectionBlack src="/meta-img3.png" title="Definimos os " titleSpan="melhores criativos" text="Atuamos na criação da mensagem mais eficaz para atrair melhor público nos seus anúncios. Como habilidades que vão desde a copy, empregando gatilhos persuasivos para despertar interesse, até os mínimos detalhes da arte e chamadas para ação claras (CTA - Call To Action). Incorporamos uma variedade de formatos criativos, incluindo materiais em imagem e vídeo, e dedicamos atenção especial ao design para transmitir profissionalismo à sua audiência." />

            <SectionWhite src="/meta-img4.png" title="Analisamos as " titleSpan="métricas das campanhas" text=" Monitoramos de perto o desempenho das suas campanhas, analisando os resultados obtidos e ajustando estratégias conforme necessário para impulsionar a eficácia e maximizar o retorno sobre o investimento. Revisamos os detalhes e fazemos relatórios periódicos com a performance e resultados das campanhas." />

            <LastSectionProduct title="Quer" span="alavancar suas vendas" title_continuation="no mundo digital?" image="/meta-img5.png" alt="Aumentar vendas" text_btn="Sim, eu quero!" />

            <Form />
        </div>
    );
}

export default MetaADS;