import Example from '@/app/assets/toninhoExemple.jpeg'
import Title from '@/shared/components/molecules/title'
import Image, { StaticImageData } from 'next/image'

interface SubSectionProps{
    title:string
    image:StaticImageData 
    description: string
    reverse?:boolean
}

function SubSection({description,image,title,reverse}:SubSectionProps){
    return (
        <div className={`flex justify-around ${reverse && 'flex-row-reverse'}`}>
            <div className="w-full flex justify-center">
                <Image src={image} alt='cervejo'  />
            </div>
            <div className="w-full flex flex-col items-center">
                <Title>{title}</Title>
                <p className="py-5">{description}</p>
            </div>
        </div>
    )
}


export default function AboutUs(){
    return(
        <section className="flex flex-col gap-20 p-10">
            <SubSection 
                image={Example}
                title='Lorem ipsum dolor'
                description={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni corporis sit, aperiam error, ipsam illum maiores aliquid facere quisquam impedit consequatur optio magnam totam deserunt quia aspernatur quod? Iusto, ipsum.'}
            />
            <SubSection 
                image={Example}
                title='Lorem ipsum dolor'
                description={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni corporis sit, aperiam error, ipsam illum maiores aliquid facere quisquam impedit consequatur optio magnam totam deserunt quia aspernatur quod? Iusto, ipsum.'}
                reverse
            />
        </section>
    )
}