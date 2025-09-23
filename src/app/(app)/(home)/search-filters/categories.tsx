import { Category } from "@/payload-types";
import { CategoryDropdown } from "./category-dropdown";

interface Props {
    data: any;
}

export const Categories = ({data}: Props) => {
    return(
        <div>

        <div className="flex flex-nowrap items-center gap-x-4">
            {data.map((category: Category) => (
                <div key={category.id} className="mx-2">
                    <CategoryDropdown
                    category={category}
                    isActive={false}
                    isNavigationHovered={false}
                    />
                </div>
            ))}
        </div>
        </div>
    )
}