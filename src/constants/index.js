import {
  frontend,
  backend,
  ux,
  prototyping,
  //
  echarts,
  docker,
  arduino,
  bootstrap,
  canvasjs,
  chartjs,
  csharp,
  css,
  dotNetCore,
  dotNet,
  postman,
  git,
  html,
  javascript,
  sql,
  nodejs,
  reactjs,
  redis,
  devexpress,
  threejs,
  aframe,
  //
  pro4,
  batchmaster,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Hakkımda",
  },
  {
    id: "tech",
    title: "Teknolojiler",
  },
  {
    id: "projects",
    title: "Projelerim",
  },
  {
    id: "contact",
    title: "İletişim",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Design",
    icon: ux,
  },
  {
    title: "Software Prototyping",
    icon: prototyping,
  },
];

const technologies = [
  { name: "Echarts", icon: echarts, index: 17 },
  { name: "Docker", icon: docker, index: 11 },
  { name: "Arduino", icon: arduino, index: 20 },
  { name: "Bootstrap", icon: bootstrap, index: 2 },
  { name: "CanvasJS", icon: canvasjs, index: 16 },
  { name: "Chart.js", icon: chartjs, index: 15 },
  { name: "C#", icon: csharp, index: 4 },
  { name: "CSS 3", icon: css, index: 1 },
  { name: ".NET Core", icon: dotNetCore, index: 6 },
  { name: ".NET Framework", icon: dotNet, index: 5 },
  { name: "Postman", icon: postman, index: 10 },
  { name: "Git", icon: git, index: 8 },
  { name: "HTML 5", icon: html, index: 0 },
  { name: "JavaScript", icon: javascript, index: 3 },
  { name: "SQL Server", icon: sql, index: 7 },
  { name: "Node JS", icon: nodejs, index: 12 },
  { name: "React JS", icon: reactjs, index: 13 },
  { name: "Redis", icon: redis, index: 9 },
  { name: "DevExpress", icon: devexpress, index: 14 },
  { name: "Three.js", icon: threejs, index: 18 },
  { name: "AFrame", icon: aframe, index: 19 },
];

const experiences = [
  {
    title: "Yazılım Mühendisi",
    company_name: "GNC Proses Otomasyon",
    icon: "/gnc_logo.png",
    iconBg: "#333333",
    date: "2021 - Halen",
    description:
      "PRO4 IoT Platformu geliştirilmesinde sorumluluk alarak Backend, PLC haberleşmesi ve arayüz geliştirmeleri gerçekleştirdim.",
  },
  {
    title: "Uzun Dönem Stajyer",
    company_name: "Halıcı Elektronik",
    icon: "/halici_logo.png",
    iconBg: "#333333",
    date: "2018 - 2019",
    description:
      "SCADA ve PLC programlama çalışmaları yaptım, kontrol ve güç panolarının testlerine katıldım.",
  },
  {
    title: "Stajyer",
    company_name: "Ferah Elektrik",
    icon: "/ferah_elektrik_logo.png",
    iconBg: "#333333",
    date: "2017",
    description: "Elektrik proje taahhüt ve arıza işlerinde çalıştım.",
  },
];

const projects = [
  {
    id: "project-1",
    name: "PRO4 IoT Platformu",
    description:
      "IoT cihazlarını merkezi bir noktadan yönetmeyi, veri toplama ve analiz etmeyi sağlayan, .NET MVC tabanlı bir web uygulaması. Platform, anlık veri grafikleri,geçmiş analizleri ve özelleştirilebilir widget’lar içeren bir dashboard sunarken;kullanıcılar HMI ekranlarında özel görsellerle dinamik tasarımlar oluşturabilir.Rapor ve Alarm modülleri sayesinde hem izleme hem de aksiyon alma süreçlerini optimize eder.",
    tags: [
      { name: "C#", color: "blue-text-gradient" },
      { name: "Entity Framework", color: "green-text-gradient" },
      { name: "SignalR", color: "pink-text-gradient" },
    ],
    image: pro4,
    repo: "https://github.com/serkankarisan",
  },
  {
    id: "project-2",
    name: "Batchmaster SCADA",
    description:
      "Batchmaster, beton santrallerinin üretim süreçlerini izlemek ve yönetmek için geliştirilmiş bir SCADA sistemidir. PLC ile iletişim kurarak, OPC DA ve S7.NET kullanarak santral bileşenlerini kontrol eder. Sistem, silo, bunker, mikser gibi öğeleri animasyonlarla izlemeyi sağlar. Kullanıcılar manuel kontrol butonlarıyla üretim süreçlerini yönetebilir, süreç kayıtları tutabilir ve irsaliye çıktıları alabilir.",
    tags: [
      { name: "S7.NET", color: "blue-text-gradient" },
      { name: "OPC UA", color: "green-text-gradient" },
      { name: "SQL Server", color: "pink-text-gradient" },
    ],
    image: batchmaster,
    repo: "https://github.com/serkankarisan",
  },
];

export { services, technologies, experiences, projects };
