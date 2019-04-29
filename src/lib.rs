mod utils;

use wasm_bindgen::prelude::*;
use loan_revolver::loan_revolver::{LoanRevolver, LoanRevolverError};

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
pub fn by_times(debt: usize, interest: f64, times: usize) -> ResultSet {
    generate_result(LoanRevolver::by_times(debt, interest, times))
}

#[wasm_bindgen]
pub fn by_per_month(debt: usize, interest: f64, per_month: usize) -> ResultSet {
    generate_result(LoanRevolver::by_per_month(debt, interest, per_month))
}

pub fn generate_result(result: Result<LoanRevolver, LoanRevolverError>) -> ResultSet {
    match result {
        Ok(r) => generate_result_array(true, JsValue::from_serde(&r).unwrap()),
        Err(e) => generate_result_array(false, format!("{:?}", e).into()),
    }
}

pub fn generate_result_array(succeeded: bool, value: JsValue) -> ResultSet {
    let array = js_sys::Array::new();
    if succeeded {
        array.push(&wasm_bindgen::JsValue::TRUE);
    } else {
        array.push(&wasm_bindgen::JsValue::FALSE);
    }
    array.push(&value);
    array
}

type ResultSet = js_sys::Array;

#[wasm_bindgen]
struct Row {
    pub turn: usize,
    pub rest: f64,
    pub next_rest: f64,
    pub amount: f64,
    pub principal: f64,
    pub interest_amount: f64,
    pub next_interest_amount: f64,
}

#[wasm_bindgen]
struct Revolver {
    pub total_amount: usize,
    pub total_interest_amount: usize,
    pub total_months: usize,
    pub annual_interest: f64,
    pub monthly_interest: f64,
    pub monthly_compound_interest: f64,
}
