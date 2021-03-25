const store = [
  {
    id: 8,
    title: '안432',
    business_category: '음식점',
    location: '반곡동',
    img:
      'https://res.cloudinary.com/diimwnnmj/image/upload/v1616122736/stores/%E1%84%8B%E1%85%A1%E1%86%AB432_pcayee.jpg',
    desc: '동남아식 프리미엄 샐러드 & 샌드위치',
  },
  {
    id: 1,
    title: 'SILBERMOND',
    business_category: '음식점',
    location: '반곡동',
    img:
      'https://res.cloudinary.com/diimwnnmj/image/upload/v1616635412/stores/IMG_3718_aulmmg.jpg',
    desc: '동남아식 프리미엄 샐러드 & 샌드위치',
  },
  {
    id: 2,
    title: '까치둥지',
    business_category: '음식점',
    location: '개운동',
    img:
      'https://res.cloudinary.com/diimwnnmj/image/upload/v1616122736/stores/%E1%84%81%E1%85%A1%E1%84%8E%E1%85%B5%E1%84%83%E1%85%AE%E1%86%BC%E1%84%8C%E1%85%B5_kuyvzw.jpg',
    desc: '동남아식 프리미엄 샐러드 & 샌드위치',
  },
  {
    id: 3,
    title: '르미엘',
    business_category: '카페',
    location: '무실동',
    img:
      'https://res.cloudinary.com/diimwnnmj/image/upload/v1616122736/stores/%E1%84%85%E1%85%B3%E1%84%86%E1%85%B5%E1%84%8B%E1%85%A6%E1%86%AF_iepwah.jpg',
    desc: '동남아식 프리미엄 샐러드 & 샌드위치',
  },
  {
    id: 4,
    title: '린',
    business_category: '음식점',
    location: '무실동',
    img:
      'https://res.cloudinary.com/diimwnnmj/image/upload/v1616122736/stores/%E1%84%85%E1%85%B5%E1%86%AB_hspcgd.jpg',
    desc: '동남아식 프리미엄 샐러드 & 샌드위치',
  },
  {
    id: 5,
    title: '보릿고개',
    business_category: '음식점',
    location: '반곡동',
    img:
      'https://res.cloudinary.com/diimwnnmj/image/upload/v1616122736/stores/%E1%84%87%E1%85%A9%E1%84%85%E1%85%B5%E1%86%BA%E1%84%80%E1%85%A9%E1%84%80%E1%85%A2_eyxpxu.jpg',
    desc: '동남아식 프리미엄 샐러드 & 샌드위치',
  },
  {
    id: 6,
    title: '사니다카페',
    business_category: '카페',
    location: '무실동',
    img:
      'https://res.cloudinary.com/diimwnnmj/image/upload/v1616122736/stores/%E1%84%89%E1%85%A1%E1%84%82%E1%85%B5%E1%84%83%E1%85%A1%E1%84%8F%E1%85%A1%E1%84%91%E1%85%A6_wbndd0.jpg',
    desc: '동남아식 프리미엄 샐러드 & 샌드위치',
  },
  {
    id: 7,
    title: '산정집',
    business_category: '음식점',
    location: '행구동',
    img:
      'https://res.cloudinary.com/diimwnnmj/image/upload/v1616122736/stores/%E1%84%89%E1%85%A1%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%8C%E1%85%B5%E1%86%B8_hbxhas.jpg',
    desc: '동남아식 프리미엄 샐러드 & 샌드위치',
  },
  {
    id: 9,
    title: '앤트빌라',
    business_category: '음식점',
    location: '반곡동',
    img:
      'https://res.cloudinary.com/diimwnnmj/image/upload/v1616122736/stores/%E1%84%8B%E1%85%A2%E1%86%AB%E1%84%90%E1%85%B3%E1%84%87%E1%85%B5%E1%86%AF%E1%84%85%E1%85%A1_pm6e15.jpg',
    desc: '동남아식 프리미엄 샐러드 & 샌드위치',
  },
  {
    id: 10,
    title: '착한낙지',
    business_category: '음식점',
    location: '단계동',
    img:
      'https://res.cloudinary.com/diimwnnmj/image/upload/v1616122736/stores/%E1%84%8E%E1%85%A1%E1%86%A8%E1%84%92%E1%85%A1%E1%86%AB%E1%84%82%E1%85%A1%E1%86%A8%E1%84%8C%E1%85%B5_rkmwwi.jpg',
    desc: '동남아식 프리미엄 샐러드 & 샌드위치',
  },
  {
    id: 12,
    title: '카페 행복지수',
    business_category: '카페',
    location: '행구동',
    img:
      'https://res.cloudinary.com/diimwnnmj/image/upload/v1616122736/stores/%E1%84%8F%E1%85%A1%E1%84%91%E1%85%A6_%E1%84%92%E1%85%A2%E1%86%BC%E1%84%87%E1%85%A9%E1%86%A8%E1%84%8C%E1%85%B5%E1%84%89%E1%85%AE_zufye2.jpg',
    desc: '동남아식 프리미엄 샐러드 & 샌드위치',
  },
  {
    id: 13,
    title: '카페553',
    business_category: '카페',
    location: '행구동',
    img:
      'https://res.cloudinary.com/diimwnnmj/image/upload/v1616122736/stores/%E1%84%8F%E1%85%A1%E1%84%91%E1%85%A6554_bamhor.jpg',
    desc: '동남아식 프리미엄 샐러드 & 샌드위치',
  },
  {
    id: 14,
    title: '카페치올라',
    business_category: '카페',
    location: '행구동',
    img:
      'https://res.cloudinary.com/diimwnnmj/image/upload/v1616122736/stores/%E1%84%8F%E1%85%A1%E1%84%91%E1%85%A6%E1%84%8E%E1%85%B5%E1%84%8B%E1%85%A9%E1%86%AF%E1%84%85%E1%85%A1_resjwi.jpg',
    desc: '동남아식 프리미엄 샐러드 & 샌드위치',
  },
  {
    id: 15,
    title: '향교막국수',
    business_category: '음식점',
    location: '개운동',
    img:
      'https://res.cloudinary.com/diimwnnmj/image/upload/v1616122737/stores/%E1%84%92%E1%85%A3%E1%86%BC%E1%84%80%E1%85%AD%E1%84%86%E1%85%A1%E1%86%A8%E1%84%80%E1%85%AE%E1%86%A8%E1%84%89%E1%85%AE_ds7pvu.jpg',
    desc: '동남아식 프리미엄 샐러드 & 샌드위치',
  },
  {
    id: 16,
    title: '허선웅닭갈비',
    business_category: '음식점',
    location: '단계동',
    img:
      'https://res.cloudinary.com/diimwnnmj/image/upload/v1616122737/stores/%E1%84%92%E1%85%A5%E1%84%89%E1%85%A5%E1%86%AB%E1%84%8B%E1%85%AE%E1%86%BC_cxflw4.jpg',
    desc: '동남아식 프리미엄 샐러드 & 샌드위치',
  },
];

export default store;
