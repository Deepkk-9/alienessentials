import { useRouter } from 'next/router'

function Page() {
    const router = useRouter()

    const { slug } = router.query

    return <p>The Slug is  {slug}</p>
}

export default Page