import { useNavigation } from "react-router-dom"

export default function SubmitBtn({text}) {
    
    const navigation = useNavigation()
    const isSubmitting = navigation.state === "submitting"

    return (

        <button type="submit" className="btn btn-success btn-block mb-3 text-xl">
            {isSubmitting ? (
                <>
                <span className="loading loading-spinner"></span>
                sending...
                </>
                ) : (
                  text ||  "Submit" )}
        </button>
    )
}
