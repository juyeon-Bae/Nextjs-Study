import Navigation from "../../components/navigation";

//use client를 선언하지 않으면 기본적으로 모두 server components
//hydrate되지는 x, js 더 적게 다운 받아도 됨
export default function AboutUs() {
    return (
        <div>
            <Navigation></Navigation>
            <h1>about us</h1>
        </div>
    )
}