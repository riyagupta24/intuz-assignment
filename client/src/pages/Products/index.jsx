import React, { Fragment, useEffect, useState } from "react";
import CustomTable from "../../components/Table";
import { productCol } from "./components/Columns";
import { Grid } from "@material-ui/core";
import Axios from "axios";
import CustomizedSnackbars from "../../components/common/Snackbar";
import { getProducts } from "../../apiRequest/product";

function Products() {
    const [productList, setProductList] = useState([]);
    const [state, setState] = useState({
        isSnackbar: false, variantIcon: '', message:''
    })

    const closeSnackabr = () => {
        setState({
            isSnackbar: false, variantIcon: '', message: ""
        })
    }

    const openSnackbar = (variant, message) => {
        setState({
            isSnackbar: true, variantIcon: variant, message
        })
    }

    useEffect(() => {
        getProductList();
    }, [])

    const getProductList = async () => {
        try {
            const res = await getProducts();
            setProductList(res)
        } catch (error) {
            openSnackbar("error", error.message);
        }
    }

    return (
        <Fragment>
            <Grid item sm={10} >
                <div className="table-main-sec">
                    <CustomTable
                        data={productList || []}
                        columns={productCol}
                    />
                </div>
            </Grid>
            <CustomizedSnackbars
                openSnackbar={state.isSnackbar} variantIcon={state.variantIcon} closeSnackabr={closeSnackabr} message={state.message}
            />
        </Fragment>
    )
}



export default Products;