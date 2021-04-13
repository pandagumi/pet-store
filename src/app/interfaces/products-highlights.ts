export interface ProductsHighlights {
    id: string,
    name: string,
    description: string,
    value: number,
    promotional_value: number,
    featured_image: string,
    images: [
        string
    ],
    videos: [
        string
    ],
    raging_stars: number,
    raging_count: number,
    installment_available: boolean,
    installment_count: number,
    featured: boolean,
    category: string,
    subcategory: string,
    animal_type: string,
    status: string,
    url: string,
    created_at: string
}
