document.addEventListener('DOMContentLoaded', function() {
    // Variáveis globais
    const header = document.getElementById('header');
    const menuMobile = document.querySelector('.menu-mobile');
    const menu = document.querySelector('.menu');
    const backToTop = document.querySelector('.back-to-top');
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dots = document.querySelectorAll('.dot');
    
    // Contador para os depoimentos
    let currentTestimonial = 0;
    
    // ===== MENU MOBILE =====
    menuMobile.addEventListener('click', function() {
        menu.classList.toggle('active');
        menuMobile.classList.toggle('active');
        
        // Alterna o ícone do menu
        const icon = menuMobile.querySelector('i');
        if (menu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Fecha o menu ao clicar em um link
    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menu.classList.remove('active');
            menuMobile.classList.remove('active');
            const icon = menuMobile.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
    
    // ===== HEADER SCROLL =====
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Botão Voltar ao Topo
        if (window.scrollY > 500) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
        
        // Adiciona classe active aos links do menu na seção correspondente
        highlightMenuOnScroll();
    });
    
    // ===== BOTÃO VOLTAR AO TOPO =====
    backToTop.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // ===== SLIDER DE DEPOIMENTOS =====
    function showTestimonial(index) {
        // Esconde todos os depoimentos
        testimonialItems.forEach(item => {
            item.style.display = 'none';
        });
        
        // Remove a classe active de todos os dots
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Mostra o depoimento atual
        testimonialItems[index].style.display = 'block';
        
        // Adiciona a classe active ao dot atual
        dots[index].classList.add('active');
        
        // Atualiza o contador
        currentTestimonial = index;
    }
    
    // Inicializa o slider
    showTestimonial(0);
    
    // Botões de navegação
    prevBtn.addEventListener('click', function() {
        let index = currentTestimonial - 1;
        if (index < 0) {
            index = testimonialItems.length - 1;
        }
        showTestimonial(index);
    });
    
    nextBtn.addEventListener('click', function() {
        let index = currentTestimonial + 1;
        if (index >= testimonialItems.length) {
            index = 0;
        }
        showTestimonial(index);
    });
    
    // Dots de navegação
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            showTestimonial(index);
        });
    });
    
    // Autoplay do slider
    setInterval(function() {
        let index = currentTestimonial + 1;
        if (index >= testimonialItems.length) {
            index = 0;
        }
        showTestimonial(index);
    }, 5000);
    
    // ===== FORMULÁRIO DE CONTATO =====
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aqui eu preciso desenvolver a lógica de envio do formulário
            // Por enquanto é só simulação
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.disabled = true;
            submitBtn.textContent = 'Enviando...';
            
            setTimeout(function() {
                // Limpa o formulário
                contactForm.reset();
                
                // Restaura o botão
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
                
                // Exibe mensagem de sucesso
                alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
            }, 1500);
        });
    }
    
    // ===== FORMULÁRIO DE NEWSLETTER =====
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Newsletter porém só simulação            
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            const submitBtn = newsletterForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.disabled = true;
            submitBtn.textContent = 'Inscrevendo...';
            
            setTimeout(function() {
                // Limpa o formulário
                newsletterForm.reset();
                
                // Restaura o botão
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
                
                // Exibe mensagem de sucesso
                alert('Inscrição realizada com sucesso! Você receberá nossas novidades em breve.');
            }, 1000);
        });
    }
    
    // ===== ANIMAÇÃO DE SCROLL SUAVE =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ===== DESTAQUE DO MENU DURANTE SCROLL =====
    function highlightMenuOnScroll() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 200;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const menuLink = document.querySelector(`.menu a[href="#${sectionId}"]`);
            
            if (menuLink) {
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    menuLink.classList.add('active');
                } else {
                    menuLink.classList.remove('active');
                }
            }
        });
    }
    
    // ===== CONTADOR DE NÚMEROS =====
    function animateCounter(element, target) {
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            element.textContent = Math.ceil(current) + '+';
            if (current >= target) {
                element.textContent = target + '+';
                clearInterval(timer);
            }
        }, 20);
    }
    
    // Inicia a animação dos contadores quando a seção estiver visível
    const numeroItems = document.querySelectorAll('.numero-item h3');
    let animated = false;
    
    window.addEventListener('scroll', function() {
        if (!animated) {
            const numerosSection = document.querySelector('.numeros');
            if (numerosSection) {
                const sectionTop = numerosSection.offsetTop;
                const sectionHeight = numerosSection.offsetHeight;
                const windowHeight = window.innerHeight;
                const scrollPosition = window.scrollY;
                
                if (scrollPosition > sectionTop - windowHeight + 200 && scrollPosition < sectionTop + sectionHeight) {
                    numeroItems.forEach(item => {
                        const target = parseInt(item.textContent);
                        animateCounter(item, target);
                    });
                    animated = true;
                }
            }
        }
    });
    
    // ===== WHATSAPP FLUTUANTE =====
    const whatsappFloat = document.getElementById('whatsapp-float');
    if (whatsappFloat) {
        whatsappFloat.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Substitua pelo número de WhatsApp real
            const phoneNumber = '000000000000000'; // numero do zipzoptzup. Se quiser testar é só colocar seu número aqui
            const message = 'Olá! Vim pelo site e gostaria de mais informações.';
            
            window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
        });
    }
    
    // ===== ANIMAÇÕES DE ENTRADA =====
    // Função que verifica se um elemento está visível na viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }
    
    // Função para adicionar classe de animação aos elementos visíveis
    function animateOnScroll() {
        const elements = document.querySelectorAll('.service-card, .gallery-item, .sobre-image, .sobre-text, .testimonial-item, .contact-info, .contact-form');
        
        elements.forEach(element => {
            if (isElementInViewport(element) && !element.classList.contains('animated')) {
                element.classList.add('animated');
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Inicializa os elementos com opacidade 0
    document.querySelectorAll('.service-card, .gallery-item, .sobre-image, .sobre-text, .testimonial-item, .contact-info, .contact-form').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Adiciona o evento de scroll para animar os elementos
    window.addEventListener('scroll', animateOnScroll);
    
    // Executa a função uma vez para animar elementos já visíveis
    animateOnScroll();
    
    // ===== PERSONALIZAÇÃO DINÂMICA =====
    // Função pra personalizar o template via JavaScript de maneira fácil e dinamica
    function customizeTemplate(options) {
        // Exemplo de opções:
        // {
        //     colors: {
        //         primary: '#4e73df',
        //         secondary: '#1cc88a',
        //         accent: '#f6c23e'
        //     },
        //     logo: 'path/to/logo.png',
        //     companyName: 'Nome da Empresa',
        //     banner: {
        //         title: 'Título Principal',
        //         subtitle: 'Subtítulo ou descrição',
        //         image: 'path/to/banner.jpg'
        //     }
        // }
        
        if (!options) return;
        
        // Cores
        if (options.colors) {
            const root = document.documentElement;
            
            if (options.colors.primary) {
                root.style.setProperty('--primary-color', options.colors.primary);
            }
            
            if (options.colors.secondary) {
                root.style.setProperty('--secondary-color', options.colors.secondary);
            }
            
            if (options.colors.accent) {
                root.style.setProperty('--accent-color', options.colors.accent);
            }
            
            if (options.colors.dark) {
                root.style.setProperty('--dark-color', options.colors.dark);
            }
            
            if (options.colors.light) {
                root.style.setProperty('--light-color', options.colors.light);
            }
        }
        
        // Logo e Nome da Empresa
        if (options.logo) {
            const logoElements = document.querySelectorAll('#logo-img, #footer-logo-img');
            logoElements.forEach(el => {
                if (el) el.src = options.logo;
            });
        }
        
        if (options.companyName) {
            const nameElements = document.querySelectorAll('#company-name, #footer-company-name');
            nameElements.forEach(el => {
                if (el) el.textContent = options.companyName;
            });
            
            // Atualiza o título da página
            document.title = options.companyName + ' - Landing Page / Seu nome aqui';
        }
        
        // Banner
        if (options.banner) {
            if (options.banner.title) {
                const bannerTitle = document.getElementById('banner-title');
                if (bannerTitle) bannerTitle.textContent = options.banner.title;
            }
            
            if (options.banner.subtitle) {
                const bannerSubtitle = document.getElementById('banner-subtitle');
                if (bannerSubtitle) bannerSubtitle.textContent = options.banner.subtitle;
            }
            
            if (options.banner.image) {
                const bannerImage = document.getElementById('banner-img');
                if (bannerImage) bannerImage.src = options.banner.image;
            }
        }
        
        // Sobre
        if (options.about) {
            if (options.about.title) {
                const aboutTitle = document.getElementById('about-title');
                if (aboutTitle) aboutTitle.textContent = options.about.title;
            }
            
            if (options.about.description) {
                const aboutDescription = document.getElementById('about-description');
                if (aboutDescription) aboutDescription.textContent = options.about.description;
            }
            
            if (options.about.image) {
                const aboutImage = document.getElementById('about-img');
                if (aboutImage) aboutImage.src = options.about.image;
            }
            
            if (options.about.features) {
                for (let i = 0; i < options.about.features.length; i++) {
                    const feature = document.getElementById(`feature-${i+1}`);
                    if (feature) feature.textContent = options.about.features[i];
                }
            }
        }
        
        // Serviços
        if (options.services) {
            if (options.services.description) {
                const servicesDescription = document.getElementById('services-description');
                if (servicesDescription) servicesDescription.textContent = options.services.description;
            }
            
            if (options.services.items) {
                for (let i = 0; i < options.services.items.length; i++) {
                    const service = options.services.items[i];
                    
                    if (service.title) {
                        const serviceTitle = document.getElementById(`service-title-${i+1}`);
                        if (serviceTitle) serviceTitle.textContent = service.title;
                    }
                    
                    if (service.description) {
                        const serviceDesc = document.getElementById(`service-desc-${i+1}`);
                        if (serviceDesc) serviceDesc.textContent = service.description;
                    }
                    
                    if (service.icon) {
                        const serviceIcon = document.getElementById(`service-icon-${i+1}`);
                        if (serviceIcon) {
                            serviceIcon.className = '';
                            serviceIcon.classList.add('fas', service.icon);
                        }
                    }
                }
            }
        }
        
        // Galeria
        if (options.gallery) {
            if (options.gallery.description) {
                const galleryDescription = document.getElementById('gallery-description');
                if (galleryDescription) galleryDescription.textContent = options.gallery.description;
            }
            
            if (options.gallery.items) {
                for (let i = 0; i < options.gallery.items.length; i++) {
                    const item = options.gallery.items[i];
                    
                    if (item.image) {
                        const galleryImg = document.getElementById(`gallery-img-${i+1}`);
                        if (galleryImg) galleryImg.src = item.image;
                    }
                    
                    if (item.title) {
                        const galleryTitle = document.getElementById(`gallery-title-${i+1}`);
                        if (galleryTitle) galleryTitle.textContent = item.title;
                    }
                    
                    if (item.description) {
                        const galleryDesc = document.getElementById(`gallery-desc-${i+1}`);
                        if (galleryDesc) galleryDesc.textContent = item.description;
                    }
                }
            }
        }
        
        // Contadores
        if (options.counters) {
            for (let i = 0; i < options.counters.length; i++) {
                const counter = options.counters[i];
                
                if (counter.value) {
                    const counterElement = document.getElementById(`counter-${i+1}`);
                    if (counterElement) {
                        counterElement.textContent = counter.value;
                        animated = false; // reiniciar animacao
                    }
                }
                
                if (counter.label) {
                    const counterLabel = document.getElementById(`counter-label-${i+1}`);
                    if (counterLabel) counterLabel.textContent = counter.label;
                }
            }
        }
        
        // Depoimentos
        if (options.testimonials) {
            if (options.testimonials.description) {
                const testimonialsDescription = document.getElementById('testimonials-description');
                if (testimonialsDescription) testimonialsDescription.textContent = options.testimonials.description;
            }
            
            if (options.testimonials.items) {
                for (let i = 0; i < options.testimonials.items.length; i++) {
                    const testimonial = options.testimonials.items[i];
                    
                    if (testimonial.text) {
                        const testimonialText = document.getElementById(`testimonial-text-${i+1}`);
                        if (testimonialText) testimonialText.textContent = testimonial.text;
                    }
                    
                    if (testimonial.name) {
                        const testimonialName = document.getElementById(`testimonial-name-${i+1}`);
                        if (testimonialName) testimonialName.textContent = testimonial.name;
                    }
                    
                    if (testimonial.position) {
                        const testimonialPosition = document.getElementById(`testimonial-position-${i+1}`);
                        if (testimonialPosition) testimonialPosition.textContent = testimonial.position;
                    }
                    
                    if (testimonial.image) {
                        const testimonialImg = document.getElementById(`testimonial-img-${i+1}`);
                        if (testimonialImg) testimonialImg.src = testimonial.image;
                    }
                }
            }
        }
        
        // CTA
        if (options.cta) {
            if (options.cta.title) {
                const ctaTitle = document.getElementById('cta-title');
                if (ctaTitle) ctaTitle.textContent = options.cta.title;
            }
            
            if (options.cta.description) {
                const ctaDescription = document.getElementById('cta-description');
                if (ctaDescription) ctaDescription.textContent = options.cta.description;
            }
            
            if (options.cta.buttonText) {
                const ctaButton = document.getElementById('cta-button');
                if (ctaButton) ctaButton.textContent = options.cta.buttonText;
            }
        }
        
        // Contato
        if (options.contact) {
            if (options.contact.description) {
                const contactDescription = document.getElementById('contact-description');
                if (contactDescription) contactDescription.textContent = options.contact.description;
            }
            
            if (options.contact.address) {
                const contactAddress = document.getElementById('contact-address');
                if (contactAddress) contactAddress.textContent = options.contact.address;
            }
            
            if (options.contact.phone) {
                const contactPhone = document.getElementById('contact-phone');
                if (contactPhone) contactPhone.textContent = options.contact.phone;
            }
            
            if (options.contact.email) {
                const contactEmail = document.getElementById('contact-email');
                if (contactEmail) contactEmail.textContent = options.contact.email;
            }
            
            if (options.contact.hours) {
                const contactHours = document.getElementById('contact-hours');
                if (contactHours) contactHours.textContent = options.contact.hours;
            }
            
            if (options.contact.social) {
                if (options.contact.social.facebook) {
                    const socialFacebook = document.getElementById('social-facebook');
                    if (socialFacebook) socialFacebook.href = options.contact.social.facebook;
                }
                
                if (options.contact.social.instagram) {
                    const socialInstagram = document.getElementById('social-instagram');
                    if (socialInstagram) socialInstagram.href = options.contact.social.instagram;
                }
                
                if (options.contact.social.twitter) {
                    const socialTwitter = document.getElementById('social-twitter');
                    if (socialTwitter) socialTwitter.href = options.contact.social.twitter;
                }
                
                if (options.contact.social.linkedin) {
                    const socialLinkedin = document.getElementById('social-linkedin');
                    if (socialLinkedin) socialLinkedin.href = options.contact.social.linkedin;
                }
                
                if (options.contact.social.whatsapp) {
                    const socialWhatsapp = document.getElementById('social-whatsapp');
                    if (socialWhatsapp) socialWhatsapp.href = options.contact.social.whatsapp;
                }
            }
            
            if (options.contact.whatsapp) {
                const whatsappFloat = document.getElementById('whatsapp-float');
                if (whatsappFloat) {
                    whatsappFloat.addEventListener('click', function(e) {
                        e.preventDefault();
                        window.open(`https://wa.me/${options.contact.whatsapp}?text=${encodeURIComponent(options.contact.whatsappMessage || 'Olá! Vim pelo site e gostaria de mais informações.')}`, '_blank');
                    });
                }
            }
            
            if (options.contact.map) {
                const mapImg = document.getElementById('map-img');
                if (mapImg) mapImg.src = options.contact.map;
            }
        }
        
        // Footer
        if (options.footer) {
            if (options.footer.description) {
                const footerDescription = document.getElementById('footer-description');
                if (footerDescription) footerDescription.textContent = options.footer.description;
            }
            
            if (options.footer.copyright) {
                const copyright = document.getElementById('copyright');
                if (copyright) copyright.textContent = options.footer.copyright;
            }
            
            if (options.footer.privacyPolicy) {
                const privacyPolicy = document.getElementById('privacy-policy');
                if (privacyPolicy) privacyPolicy.href = options.footer.privacyPolicy;
            }
            
            if (options.footer.termsOfService) {
                const termsOfService = document.getElementById('terms-of-service');
                if (termsOfService) termsOfService.href = options.footer.termsOfService;
            }
        }
    }
    
    // Expõe a função de personalização mencionada na linha 311
    window.customizeTemplate = customizeTemplate;
    
    // Exemplo de uso (comentado):
    /*
    customizeTemplate({
        colors: {
            primary: '#4e73df',
            secondary: '#1cc88a',
            accent: '#f6c23e'
        },
        companyName: 'Minha Empresa',
        banner: {
            title: 'Bem-vindo à Minha Empresa',
            subtitle: 'Oferecemos as melhores soluções para o seu negócio'
        }
    });
    */
});