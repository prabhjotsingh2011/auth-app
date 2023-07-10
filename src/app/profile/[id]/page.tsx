export default function UserProfile({params}:any){
    return (
        <div>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <h1> ProfilePage</h1>
                <hr />
                <p>profile page {params.id}</p>
            </div>
        </div>
    )
}