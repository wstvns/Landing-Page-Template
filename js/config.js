// Configuração do Template
const templateConfig = {
    // Cores principais
    colors: {
        primary: '#4e73df',     // Cor principal
        secondary: '#1cc88a',   // Cor secundária
        accent: '#f6c23e',      // Cor de destaque
        dark: '#2e3951',        // Cor escura
        light: '#f8f9fc'        // Cor clara
    },
    
    // Informações da Empresa
    companyInfo: {
        name: 'Nome do Negócio',
        logo: 'images/logo-placeholder.png',
        description: 'Breve descrição sobre a empresa e sua missão.'
    },
    
    // Banner Principal
    banner: {
        title: 'Título Principal do Seu Negócio',
        subtitle: 'Uma breve descrição sobre o que sua empresa oferece e como pode ajudar seus clientes.',
        image: 'images/banner-placeholder.jpg',
        ctaButton: 'Fale Conosco',
        ctaSecondary: 'Nossos Serviços'
    },
    
    // Seção Sobre
    about: {
        title: 'Nossa História',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.',
        image: 'images/about-placeholder.jpg',
        features: [
            'Característica 1',
            'Característica 2',
            'Característica 3'
        ]
    },
    
    // Seção Serviços
    services: {
        description: 'Oferecemos soluções completas para atender todas as suas necessidades.',
        items: [
            {
                title: 'Serviço 1',
                description: 'Descrição detalhada do serviço oferecido e seus benefícios para o cliente.',
                icon: 'fa-star'
            },
            {
                title: 'Serviço 2',
                description: 'Descrição detalhada do serviço oferecido e seus benefícios para o cliente.',
                icon: 'fa-heart'
            },
            {
                title: 'Serviço 3',
                description: 'Descrição detalhada do serviço oferecido e seus benefícios para o cliente.',
                icon: 'fa-gem'
            },
            {
                title: 'Serviço 4',
                description: 'Descrição detalhada do serviço oferecido e seus benefícios para o cliente.',
                icon: 'fa-cog'
            }
        ]
    },
    
    // Seção Galeria
    gallery: {
        description: 'Confira alguns dos nossos trabalhos e projetos realizados.',
        items: [
            {
                title: 'Projeto 1',
                description: 'Breve descrição do projeto',
                image: 'images/gallery-1.jpg'
            },
            {
                title: 'Projeto 2',
                description: 'Breve descrição do projeto',
                image: 'images/gallery-2.jpg'
            },
            {
                title: 'Projeto 3',
                description: 'Breve descrição do projeto',
                image: 'images/gallery-3.jpg'
            },
            {
                title: 'Projeto 4',
                description: 'Breve descrição do projeto',
                image: 'images/gallery-4.jpg'
            },
            {
                title: 'Projeto 5',
                description: 'Breve descrição do projeto',
                image: 'images/gallery-5.jpg'
            },
            {
                title: 'Projeto 6',
                description: 'Breve descrição do projeto',
                image: 'images/gallery-6.jpg'
            }
        ]
    },
    
    // Seção Números
    counters: [
        {
            value: '500',
            label: 'Clientes Satisfeitos'
        },
        {
            value: '150',
            label: 'Projetos Concluídos'
        },
        {
            value: '25',
            label: 'Prêmios Recebidos'
        },
        {
            value: '10',
            label: 'Anos de Experiência'
        }
    ],
    
    // Seção Depoimentos
    testimonials: {
        description: 'Veja o que nossos clientes dizem sobre nós.',
        items: [
            {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.',
                name: 'Nome do Cliente 1',
                position: 'Cargo / Empresa',
                image: 'images/testimonial-1.jpg'
            },
            {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.',
                name: 'Nome do Cliente 2',
                position: 'Cargo / Empresa',
                image: 'images/testimonial-2.jpg'
            },
            {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.',
                name: 'Nome do Cliente 3',
                position: 'Cargo / Empresa',
                image: 'images/testimonial-3.jpg'
            }
        ]
    },
    
    // Seção CTA
    cta: {
        title: 'Pronto para começar seu projeto?',
        description: 'Entre em contato conosco hoje mesmo e descubra como podemos ajudar a transformar suas ideias em realidade.',
        buttonText: 'Fale Conosco'
    },
    
    // Seção Contato
    contact: {
        description: 'Estamos prontos para atender você e responder a todas as suas dúvidas.',
        address: 'Av. Exemplo, 123 - Bairro, Cidade - UF',
        phone: '(00) 12345-6789',
        email: 'contato@seuemail.com',
        hours: 'Segunda a Sexta: 8h às 18h',
        map: 'images/map-placeholder.jpg',
        social: {
            facebook: 'https://facebook.com/',
            instagram: 'https://instagram.com/',
            twitter: 'https://twitter.com/',
            linkedin: 'https://linkedin.com/',
            whatsapp: 'https://wa.me/5500000000000'
        },
        whatsapp: '5500000000000',
        whatsappMessage: 'Olá! Vim pelo site e gostaria de mais informações.'
    },
    
    // Rodapé
    footer: {
        description: 'Breve descrição sobre a empresa e sua missão.',
        copyright: '© 2025 Nome do Negócio. Todos os direitos reservados.',
        privacyPolicy: '#',
        termsOfService: '#'
    }
};

// Aplica a configuração ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    // Verifica se a função de personalização existe
    if (typeof window.customizeTemplate === 'function') {
        // Converte a configuração para o formato esperado pela função customizeTemplate
        const config = {
            colors: templateConfig.colors,
            logo: templateConfig.companyInfo.logo,
            companyName: templateConfig.companyInfo.name,
            banner: templateConfig.banner,
            about: templateConfig.about,
            services: templateConfig.services,
            gallery: templateConfig.gallery,
            counters: templateConfig.counters,
            testimonials: templateConfig.testimonials,
            cta: templateConfig.cta,
            contact: templateConfig.contact,
            footer: {
                description: templateConfig.footer.description,
                copyright: templateConfig.footer.copyright,
                privacyPolicy: templateConfig.footer.privacyPolicy,
                termsOfService: templateConfig.footer.termsOfService
            }
        };
        
        // Aplica a configuração
        window.customizeTemplate(config);
    } else {
        console.error('Função customizeTemplate não encontrada. Verifique se o arquivo main.js foi carregado corretamente.');
    }
});