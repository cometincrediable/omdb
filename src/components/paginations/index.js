import ResponsivePagination from "react-responsive-pagination";

const Pagination = (props) => {
    return(
        <ResponsivePagination
        current={props.current}
        total={props.total}
        onPageChange={props.onPageChange}
      />
    )
}
export default Pagination