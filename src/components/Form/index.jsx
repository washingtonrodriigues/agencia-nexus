"use client"

import { useForm } from 'react-hook-form'
import LineBlue from '@/components/ui/line-blue'
import { SendHorizonalIcon } from 'lucide-react';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import sendEmail from '../../app/api/send-form';
import { useState } from 'react';
import BouncingDotsLoader from '@/animations/BouncingDotsLoader/bouncing-dots-loader';
import Link from 'next/link';

const Form = () => {
    const [textBtn, setTextBtn] = useState("Enviar")
    const [clickedBtn, setClickedBtn] = useState(false)
    const [checkedTerms, setCheckedTerms] = useState(false)
    const [termsOk, setTermsOk] = useState(true)

    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: { errors },
    } = useForm();


    const onSubmit = async (data, ev) => {
        ev.preventDefault()
        try {

            if (!checkedTerms) {
                // Se não estiver marcado, exiba uma mensagem de erro ou tome a ação adequada
                setTermsOk(false)
                return;
            }

            setTextBtn("Enviando")
            setClickedBtn(true)
            const mailOptions = {
                from: {
                    name: data.name,
                    address: data.email
                },
                to: process.env.NEXT_PUBLIC_ADMIN_EMAIL,
                subject: `Formulário de contato | ${data.name}`,
                text: `${data.message}\n\nEmpresa: ${data.company}\nTelefone: ${data.phone}`,
                html: `${data.message}<br/><br/>
                
                <strong>Empresa:</strong> <i>${data.company}</i><br/>
                <strong>Telefone:</strong> <i>${data.phone}</i><br/>
                <strong>Email:</strong> <i>${data.email}</i>`
            };
            // Incluir os dados do formulário no objeto a ser enviado
            const formData = {
                name: data.name,
                company: data.company,
                phone: data.phone,
                email: data.email,
                message: data.message,
            };

            // Chamar a função sendEmail
            await sendEmail(mailOptions, formData);

            // Restante do código, como exibição de mensagem de sucesso, etc.
            console.log("E-mail enviado com sucesso!");
            setTextBtn("Enviar")
            setClickedBtn(false)
            reset();
            setCheckedTerms(false)
        } catch (error) {
            console.error("Erro ao enviar e-mail:", error);
            // Tratar o erro, exibir mensagem de erro, etc.
        }
    }

    const nomeCompletoRegex = /^[a-zA-ZÀ-ÿ']+(\s[a-zA-ZÀ-ÿ']+)+$/;

    return (
        <div className="bg-[#2e2d2c] py-[30px] flex items-center flex-col">
            <h1 className="font-poppins uppercase tracking-[2px] text-primary" >Vamos juntos para o topo</h1>
            <h2 className="font-ubuntu text-[2rem]">Entre em contato</h2>
            <LineBlue />
            <form onSubmit={handleSubmit(onSubmit)} className="flex w-[90%] flex-col font-poppins mt-8">
                <label className="text-sm mt-5" htmlFor="name">Nome</label>
                <input className="bg-[#434242] text-sm rounded-3xl mt-2 p-4" type="text" placeholder='Digite seu nome completo'  {...register("name", {
                    required: {
                        value: true,
                        message: "Por favor, digite o seu nome completo!",
                    },
                    validate: (value) => {
                        return nomeCompletoRegex.test(value) || "Por favor, digite o seu nome completo!";
                    }
                })} />
                {errors.name && (
                    <span className="mt-2 text-xs text-red-500">
                        {errors.name.message}
                    </span>
                )}

                <label className="text-sm mt-5" htmlFor="company">Empresa</label>
                <input className="bg-[#434242] text-sm rounded-3xl mt-2 p-4" type="text" placeholder='Digite o nome da sua empresa'  {...register("company", {
                    required: {
                        value: true,
                        message: "Por favor, digite o nome da sua empresa!",
                    },
                })} />
                {errors.company && (
                    <span className="mt-2 text-xs text-red-500">
                        {errors.company.message}
                    </span>
                )}

                <label className="text-sm mt-5" htmlFor="phone">Telefone</label>
                <input maxLength={11} className="bg-[#434242] text-sm rounded-3xl mt-2 p-4" type="tel" placeholder='DDD + Número'  {...register("phone", {
                    required: {
                        value: true,
                        message: "Por favor, digite um número válido!",
                    },
                    pattern: {
                        value: /^\d*$/,
                        message: "Por favor, digite apenas números no campo de telefone.",
                    },
                    maxLength: {
                        value: 11,
                        message: "O número de telefone deve ter no máximo 11 dígitos.",
                    },
                    minLength: {
                        value: 11,
                        message: "O número de telefone deve ter 11 dígitos.",
                    },
                })} />
                {errors.phone && (
                    <span className="mt-2 text-xs text-red-500">
                        {errors.phone.message}
                    </span>
                )}

                <label className="text-sm mt-5" htmlFor="email">E-mail</label>
                <input className="bg-[#434242] text-sm rounded-3xl mt-2 p-4" type="email" placeholder='example@email.com'  {...register("email", {
                    required: {
                        value: true,
                        message: "Por favor, digite um e-mail válido!",
                    },
                })} />
                {errors.email && (
                    <span className="mt-2 text-xs text-red-500">
                        {errors.email.message}
                    </span>
                )}

                <label className="text-sm mt-5" htmlFor="message">Mensagem</label>
                <textarea required onChange={(ev) => setValue("message", ev.target.value)} name="" id="" cols="30" rows="5" className="bg-[#434242] text-sm rounded-xl mt-2 p-4"></textarea>

                <div className="mt-4"><input
                    checked={checkedTerms}
                    onChange={(e) => {
                        setCheckedTerms(e.target.checked);
                        setValue('privacyPolicy', e.target.checked);
                        setTermsOk(e.target.value)
                    }}
                    className="mr-[5px]" type="checkbox" name="" id="" /><label className="text-sm" htmlFor="">Li e concordo com os termos da <Link className='text-primary' href="#">Política de Privacidade</Link> da Nexus Digital</label></div>
                {!termsOk && (
                    <span className="mt-2 text-xs text-red-500">
                        Você precisa concordar com a Política de Privacidade
                    </span>
                )}

                <button type="submit" className="border-solid border-[2px] border-primary mt-6 rounded-3xl py-3 flex items-center justify-center gap-2 uppercase w-[200px] mx-auto">{textBtn} {clickedBtn ? <BouncingDotsLoader /> : <SendHorizonalIcon size={16} />}</button>
            </form>
        </div>
    );
}

export default Form;