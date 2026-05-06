import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm";

export default function RecipeCode(props) {
    return (
        <>
            <Card className="max-w-2xl mx-auto mt-6 shadow-lg rounded-2xl">
                <CardContent>
                    <div className="prose prose-sm sm:prose lg:prose-lg max-w-none">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {props.recipe}
                        </ReactMarkdown>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}