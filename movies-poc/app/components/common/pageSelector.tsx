import PageButton from "@/app/components/ui/pageButton";

interface PageSelector {
    page: number;
    totalPages: number;
    onPageChange: (newPage: number) => void
}

const PageSelector = ({page, totalPages, onPageChange}: PageSelector) => {
    return (
        <div className="flex flex-auto mt-6 max-h-12">
            {
                page !== 1 && (
                    <PageButton
                    onClick={() => onPageChange(Math.max(page - 1, 1))}
                    text="Previous"
                    />
                )}
            {Array.from({length: totalPages}, (_, i) => (
                <PageButton
                    key={i}
                    onClick={() => onPageChange(i + 1)}
                    text={i + 1}
                    className={`${page === i + 1 ? 'bg-red-600' : ''}`}
                />
            ))}
            {
               page !== totalPages && (
                   <PageButton
                    onClick={() => onPageChange(Math.min(page + 1, totalPages))}
                    text="Next"
                    />
                )}

        </div>
    );
}
export default PageSelector;