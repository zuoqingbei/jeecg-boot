import AppHome from '@/front/views/AppHome'
import AppProduct from '@/front/views/AppProduct'
import ProductDetail from '@/front/views/AppProduct/ProductDetail'
import AppSolution from '@/front/views/AppSolution'
import AppCases from '@/front/views/AppCases'
import AppKnow from '@/front/views/AppKnow'
import AppAbout from '@/front/views/AppAbout'
import FrontLayout from '@/front/FrontLayout'

export const frontRouterMap = [
    {
        path: '/hl',
        component: FrontLayout,
        children: [
            {
                path: '/hl',
                name: 'home',
                component: AppHome
            },
            {
                path: '/hl/product',
                name: 'product',
                component: AppProduct
            },
            {
                path: '/hl/product/productDetail',
                name: 'productDetail',
                component: ProductDetail,
            },
            {
                path: '/hl/solution',
                name: 'solution',
                component: AppSolution
            },
            {
                path: '/hl/cases',
                name: 'cases',
                component: AppCases
            },
            {
                path: '/hl/know',
                name: 'know',
                component: AppKnow
            },
            {
                path: '/hl/about',
                name: 'about',
                component: AppAbout
            }
        ]
    }
]


