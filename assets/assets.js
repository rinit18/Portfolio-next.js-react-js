import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import intellij from './intellij.png';
import eclipse from './eclipse.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import instagram from './instagram.png';
import linkedln from './linkedln.png';
import facebook from './facebook.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    eclipse,
    intellij,
    vscode,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    linkedln,
    facebook,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    instagram,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'Microservices Platform',
        description: 'Java · Spring Boot · Kafka · PostgreSQL',
        bgImage: '/work-1.png',
        github: 'https://github.com/rinit18',
        tags: ['Java 17', 'Spring Boot', 'Kafka', 'PostgreSQL', 'Docker'],
    },
    {
        title: 'gRPC Service Mesh',
        description: 'gRPC · Redis · Prometheus · Grafana',
        bgImage: '/work-2.png',
        github: 'https://github.com/rinit18',
        tags: ['gRPC', 'Redis', 'Prometheus', 'Grafana'],
    },
    {
        title: 'Event-Driven System',
        description: 'Kafka · Spring Boot · Docker · Kubernetes',
        bgImage: '/work-3.png',
        github: 'https://github.com/rinit18',
        tags: ['Kafka', 'Spring Boot', 'Docker', 'K8s'],
    },
    {
        title: 'Portfolio Website',
        description: 'Next.js · React · TailwindCSS',
        bgImage: '/work-4.png',
        github: 'https://github.com/rinit18',
        tags: ['Next.js', 'React', 'TailwindCSS'],
    },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Backend Development', description: 'Building scalable, production-grade REST APIs and microservices using Java 17, Spring Boot, and PostgreSQL with clean architecture patterns.', link: '' },
    { icon: assets.mobile_icon, title: 'Event-Driven Architecture', description: 'Designing and implementing event-driven systems using Apache Kafka for real-time data streaming and distributed messaging pipelines.', link: '' },
    { icon: assets.ui_icon, title: 'System Design & DevOps', description: 'Containerizing apps with Docker, orchestrating with Kubernetes, and setting up observability stacks using Prometheus and Grafana.', link: '' },
    { icon: assets.graphics_icon, title: 'gRPC & API Design', description: 'Designing high-performance inter-service communication with gRPC, RESTful API design, and Redis caching for optimized backends.', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Core Stack', description: 'Java 17, Spring Boot, Kafka, PostgreSQL, Redis, gRPC, Docker' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Sc. in IT (AI), MCA — Continuously learning backend engineering' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built 4+ production-style backend systems and microservice platforms' }
];

export const toolsData = [
    assets.vscode, assets.intellij, assets.mongodb, assets.eclipse, assets.git
];

export const techStack = [
    { name: 'Java 17', color: '#f89820' },
    { name: 'Spring Boot', color: '#6db33f' },
    { name: 'Apache Kafka', color: '#231f20' },
    { name: 'PostgreSQL', color: '#336791' },
    { name: 'Redis', color: '#dc382d' },
    { name: 'gRPC', color: '#244c5a' },
    { name: 'Docker', color: '#2496ed' },
    { name: 'Kubernetes', color: '#326ce5' },
    { name: 'Prometheus', color: '#e6522c' },
    { name: 'Grafana', color: '#f46800' },
    { name: 'React', color: '#61dafb' },
    { name: 'Next.js', color: '#000000' },
];