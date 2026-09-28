import { Product, CategoryItem } from '../types';

export const SHOWROOM_IMAGE = 'https://plain-enam-prod-public.komododecks.com/202609/22/hPpsqVaTtTPcBfZcOQL8/image.jpg';

export const HERO_IMAGE = 'https://plain-enam-prod-public.komododecks.com/202609/22/EaOSmKSHNFytrdXA8t17/image.jpg';

export const CATEGORIES: CategoryItem[] = [
  {
    id: 'cat-vestuario',
    name: 'Vestuário',
    subtitle: 'Alfaiataria & Casual',
    filterValue: 'Vestuário',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCv6fR7VNfKSH6JDg6eTDqn0fXVlEJl5mMBR1OY9WkFASQKTNpXF3v2xAKi8DKBqjBF7UhG_xd7lPJNspYLAxOeOtvMfqkIXcuFraXfvN-2s1tkLFlOgtVOJfp0j_16NgOc3fnbk6wJpLb9PdgZM9BLcn_C9tiDw7FGiU-YuBCCzx6K6jQQoEXlUu8lKJdLUkKoswJApYEwPlnD_Rvmd0mzFLUm3TxFzBIyRxdzV-V75IKldYrO7Iyu0g'
  },
  {
    id: 'cat-calcados',
    name: 'Calçados',
    subtitle: 'Linha Urbana & Couro',
    filterValue: 'Calçados',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9irYY-wyyaLsFfM0Z5Kpd-UHImsyfd5AQnwre0LGNR_Wtg9N7U7G591VLoFOT0EPip1THiwrsr2vmARP6euoOkcagc6m4VAYPh6rRWT5baBzrOfyTz0Tq0jQbATU2fkfn5XVOATkLJx88xI8miRuVKo356iJd0U2JGLpvK9QL009dNNWs5hNKD7Pubp6A_r4RsKEqKiFsMl9ZhrtfCYQgO_kuug-FCSepDgxrY9VVqXHtv09zwkAVXg'
  },
  {
    id: 'cat-acessorios',
    name: 'Acessórios',
    subtitle: 'Bolsas & Detalhes',
    filterValue: 'Acessórios',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPf69y-t6h3KxTa8iVy4CVYZR_6w4XHG_-G9po62ivRBXj3EJCZ72rdvhLnbUJurVcsekeO1aaa8FF48KzPeKnPaFyp7ZE8cm4W7A6Dfk4LMDdATFn3JyMqkO_4RoWFq95C3cmpCU2dHP7MCBtodT_8Iz4aWb2UYoHVw_v3zDB6AEX0AYr6MT54F7CGxU0JE_wRe0ket12tzJqvuwb_Xj0Kvxos6WJWIQ6CDsxFhuTYAXBnxR55n9bog'
  },
  {
    id: 'cat-perfumaria',
    name: 'Perfumaria',
    subtitle: 'Fragrâncias de Nicho',
    filterValue: 'Perfumaria',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANXKbRFSAoOl6aI0-_aueCMVFuGW93RibgoOGbiC5KINgxBrhDL63zP3NFfRKDC46EyfQdYfmsCpJVUwPbWmvBvWV7qBc_VqTa2xCoNL1I48jsyN6BM8E8KLz0l4YFDj-b7uFM1gjF_gr0pig1wRqNDu3TEBX14SaUvGmsQN1H47YV8E8QH9f6lJl5Io92SlYZm9PauoweYgAvWbvc36MSwoUC1TvbCEKjvGm9-iqKx1ll30VBkSe8mg'
  },
  {
    id: 'cat-design',
    name: 'Design & Casa',
    subtitle: 'Peças Singulares',
    filterValue: 'Design & Casa',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSlseW_4iAYv7JeZHi9ls-0ZhGMIFMl95reKqdOjVzR86g4jyxcwrvBXSZlxnGKje8fvn1QUJsYCdTlFhiQHhKwnRcet5WauS35O3aIbE9Yo5ns2vA0epSt6qoRLcWaeLQsg0zP42_dRoOJqSAAZ9jRaieA_igQ9eKjuRUGpriHjGfDGN2WA5g-yc9LBZkCdp4vUCRqi-2zP0XZ0i4oiK6vwCS0GK8Z2RLccQJGZ6Z1XHtPZqJlVuRGw'
  },
  {
    id: 'cat-novos',
    name: 'Novos Chegados',
    subtitle: 'Edições Recentes',
    filterValue: 'Todos',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGZSIe032oT8GxqU3952fWK9x5Y9vBDF9qIKcuSKx1V4ODmd_UMptB1aHDMHolIMrGOy8v1KN-jb3m9wZm7i7HUM2dkX3ucyM55rXaXAu6S2-1WtMC5QVsI03IRrEHRE_rPaaJIaqE_rGpQgqFcml8Pvm-4wtZndLC3exQYfMLV7CfVgh-Hbzt0rJRUvYDZQ3119RmR7UdiR_4M73ZXHT3vtMkqGGkoP2vkAJYZ4-Oy9b-wHQTfPHXyg'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'Camisa Essential Premium',
    category: 'Vestuário',
    price: 'R$ 289,00',
    priceNumeric: 289,
    description: 'Modelagem atemporal em puro algodão nobre penteado.',
    details: [
      'Algodão egípcio 100% penteado fio 80',
      'Costura francesa com reforço em ponto fino',
      'Botões de madrepérola natural',
      'Modelagem relaxed fit contemporânea'
    ],
    sizes: ['P', 'M', 'G', 'GG'],
    inStock: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDybPskZjilSLS7lx9pqUhls-5LAMIAQQOAvT5Anq3vm_E0CmbbgKCbod4-JvobFwUVJJ121nReeM7EArjxO8HonUIZ5iS4Z6DG7GOYbRP3MUFMwbS90oPX8VjWBW74klzunapNEmYwnTTorxXTjw79M24zUSXdqdzcKkKiRCwkfHePxS6QoMR1LREIO0RFm_C-KZgDwvRmDXpGjX0FVDfSyYEtM-FAJ0WGzgdZ1J9Yj8xLLsMNgFg_TA',
    badge: 'Edição Limitada'
  },
  {
    id: 'prod-2',
    name: 'Tênis Street Urban Edition',
    category: 'Calçados',
    price: 'R$ 449,00',
    priceNumeric: 449,
    description: 'Amortecimento anatômico e acabamento em camurça.',
    details: [
      'Camurça hidrofugada de toque macio',
      'Palmilha anatômica em EVA com memória',
      'Solado de borracha natural vulcanizada',
      'Cadarço de algodão encerado extra'
    ],
    sizes: ['39', '40', '41', '42', '43'],
    inStock: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBA_G7bfwBgq6I2R80aZ2cYz0LbXUva8OF9PvTZEzW5oTz3unzzQlH5RsJ0QO5_AigGp0J2QzKttHRhxQ33ywGcITevIxMRriiR10ArU4lQ53b4Vpwx4YPr9DdI_FJ_3v6DYyhO39vX_Knz7B4EtWs7hCDveN4r6d4BeMu26p1HHYF93XKsEmJ0Vu0o5HC8NCDrBJ7sP0hD4KQi9zu-PGIbJj0ZqLfGNpVFzSVcB6XyRN_IX0ontPOxuA',
    badge: 'Mais Desejado'
  },
  {
    id: 'prod-3',
    name: 'Bolsa Concept Couro Nobre',
    category: 'Acessórios',
    price: 'R$ 380,00',
    priceNumeric: 380,
    description: 'Couro legítimo com fecho estruturado e alça versátil.',
    details: [
      'Couro bovino integral com curtimento vegetal',
      'Ferragens em banho grafite escovado',
      'Alça removível e ajustável para tiracolo',
      'Compartimento interno com zíper blindado'
    ],
    sizes: ['Único (32 x 24 cm)'],
    inStock: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClIBY2-QtLacDv4FtBxO5CKt0U-bL5K8YFuq-hXc3rAUbWWC2yqy-bquz_TV1qIaZLOV5fAUfAIQfDDttgIme5DkgeBVZ9jN34z7t4crdgJfYD3J6rIb9MztgY8atgxadH9btjeZ41TTOUCS5e_6KWWsqT2kmawNA7CHQiGtN52KVmJCDiXE1qWn5Nt1CiDsSX26US5IBalpukswrUd2wd9WvRtpTsbiGxlxiWc-LLigHL-X0opQmxVQ'
  },
  {
    id: 'prod-4',
    name: 'Óculos Frame Geometric',
    category: 'Acessórios',
    price: 'R$ 260,00',
    priceNumeric: 260,
    description: 'Armação em acetato polido com lentes UV400.',
    details: [
      'Acetato italiano Mazzucchelli polido à mão',
      'Lentes CR-39 polarizadas com proteção total UV400',
      'Dobradiças quádruplas em aço inoxidável',
      'Acompanha estojo rígido em couro e flanela microfibra'
    ],
    sizes: ['Padrão Unissex'],
    inStock: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYXUoIf-gX_Qmb6hYf0MR6dMxBNO-hMu3DgRC8HTgclHZlLCsTLGHvjwjNATETcL-RH9xdQ81PIHYr8VdXW23P8P1aru6FPQgqQQF3WBWBm2rPD5BAwji4JQ0ynDDrvLXT0LnTLaxuXnkCxLU_6Xzn_At_viCvb3d4ZbJPjsMFaZX3ZR3oclgUqmPBtfLSqcBCOMZPRyKa5dZz7k9BaZF5xgPGoXROi24Vfh_aLY6TCq0oQBx0lY_GHw'
  },
  {
    id: 'prod-5',
    name: 'Perfume Élégance Noire 100ml',
    category: 'Perfumaria',
    price: 'R$ 340,00',
    priceNumeric: 340,
    description: 'Notas de âmbar, sândalo e especiarias nobres.',
    details: [
      'Concentração Eau de Parfum (22% essência)',
      'Notas de topo: Bergamota e Pimenta Rosa',
      'Notas de coração: Cardamomo e Cedro Atlas',
      'Notas de base: Âmbar Negro e Vetiver Haitiano'
    ],
    sizes: ['Frasco 100ml'],
    inStock: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDR27F3pLj9zDMx7TzX34GVyZxO-w2LJ7JExTZKy4D0du3vbC5Jn4TYfcVsz9jeCjFPojZdDjpW6TgtnXAvUYN0zx0GiUmKRexLkcBsUNpukdDRQeYJYnqPJmEkFl1FGtwTgYTUedT77que9QOMAdYuzqHSzVXlyNRfcXsxCsBvQuTa15BUxSAud5GQCS8TOx4kFWgouzGnjGHgAvm1FROoj9HXrMH4N6IjuSxPJEng2Fmq6GkeGIfXfA'
  },
  {
    id: 'prod-6',
    name: 'Jaqueta Streetwear Corta-Vento',
    category: 'Vestuário',
    price: 'R$ 520,00',
    priceNumeric: 520,
    description: 'Tecido técnico leve com proteção térmica sutil.',
    details: [
      'Nylon ripstop impermeável respirável',
      'Zíperes selados termosoldados YKK',
      'Capuz embutido na gola estruturada',
      'Ajustes nos punhos com velcro magnético'
    ],
    sizes: ['M', 'G', 'GG'],
    inStock: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBh04zpayrTQmKvRwVCatr8o9wEHFiRs8yNar8p3GRMwBxWo6vNHOPiwZjAIOLULCogN_M6elDl3RzvIIGCCywUiOj628tYA_5CW4Gfvc9YNo6Hgwh6dkVepwMNH7-4pTkyjzEFEOt4qBK8MUuvsqsMv8xZB2XFWGEkMWDnk-UBM6GegHJxxoU1qjiKWjegODyGAvtb2Trr8ZP4JQ86p6h4olva8ENspxYetJY4f1qATsvAtyo2RpIsrw'
  },
  {
    id: 'prod-7',
    name: 'Relógio Minimalist Steel Chrono',
    category: 'Acessórios',
    price: 'R$ 680,00',
    priceNumeric: 680,
    description: 'Caixa slim em aço 316L com vidro mineral temperado.',
    details: [
      'Movimento japonês Miyota quartzo de alta precisão',
      'Caixa slim de 40mm em aço inoxidável 316L',
      'Pulseira em couro legítimo vegetal com fecho de engate rápido',
      'Resistência à água 5 ATM (50 metros)'
    ],
    sizes: ['Aço Escovado 40mm'],
    inStock: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6SCqZK7NKINlgb1txCS60IjUElyvsoW5sVxXhLBVMKjirXb-eIxHycj6rYM_VzMXjeoJx8Oq3O9eY2KjlGKin6uUOXVaWBiRHpLCp_j2LScme5bDYhXBFmMntv9sJcdD4B_crPw7X0FFXcOq53YJPRjOW2qf7z5s63FlZRcqkQfCgIpJB-UFAIFVoNXISSy_NMhvWHguBX1CShadGR88ukl9f_5-9jwUqJZBrd2PjxuPEWAOrjzCrdQ'
  },
  {
    id: 'prod-8',
    name: 'Kit Everyday Lifestyle & Home',
    category: 'Design & Casa',
    price: 'R$ 210,00',
    priceNumeric: 210,
    description: 'Vela aromática vegetal, cerâmica pura e linho fino.',
    details: [
      'Vela aromática de cera de coco e pavio de algodão',
      'Prato porta-joias em cerâmica artesanal rústica',
      'Toalha de mão em puro linho pré-lavado',
      'Produzido manualmente em ateliê parceiro'
    ],
    sizes: ['Kit Completo (3 peças)'],
    inStock: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcO4uzQKaj-TveVWW7SoSnKTG7R7BJrKTy02A5aJ5D5EkwBOHy0KXHpyhrF42eKc5FG9R16fKIfr2hGmiM7Fwb8p3cQTC8S8LBzCIcRS08aTsGv8QFJbMU_ChDzHuF7L9Ghhb-bkCqWXdtj3ycnYc7y2Tvrv4MWpQhyltOqMJislhu6Tbc1JDQ8LlzwihZPWY2geqnVKYmIuFhrrQgNi3wYMeS0YJVtVAcdeH30cyT8mR68Sq7yH0z8g'
  }
];

export const STORE_NAME = 'ESSÊNCIA STORE';
export const STORE_SUBTITLE = 'BOUTIQUE';
export const STORE_LEGAL_NAME = 'Essência Store Boutique Ltda.';
export const STORE_CNPJ = '42.189.304/0001-82';
export const STORE_TAGLINE = 'Boutique Autoral & Alfaiataria';
export const STORE_LOCATION = 'Alameda Lorena, 1480 — Jardins, São Paulo / SP';
export const STORE_CEP = '01424-001';
export const STORE_PHONE = '+55 (11) 3088-4220';
export const STORE_WHATSAPP_DISPLAY = '+55 (11) 99876-1480';
export const STORE_EMAIL = 'atendimento@essenciastore.com.br';

export const PRINCIPLES = [
  {
    id: '01',
    title: 'Curadoria de Boutique',
    description: 'Edições limitadas garimpadas em ateliês nobres com matérias-primas puras e acabamento impecável.'
  },
  {
    id: '02',
    title: 'Personal Stylist & Atendimento Dedicado',
    description: 'Fale diretamente com nosso vendedor no WhatsApp para tirar dúvidas de medidas exatas, receber vídeos reais das peças e compor looks exclusivos.'
  },
  {
    id: '03',
    title: 'Embalagem Especial & Envio 24h',
    description: 'Caixa rígida perfumada com seda e fita de gorgurão. Despacho nacional em 24h com seguro total.'
  },
  {
    id: '04',
    title: 'Ajustes no Ateliê Essência Store',
    description: 'Ajustes de alfaiataria cortesia em nossa loja física na Alameda Lorena ou troca simplificada sem custo.'
  }
];

export const WHATSAPP_NUMBER = '5511998761480';

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
