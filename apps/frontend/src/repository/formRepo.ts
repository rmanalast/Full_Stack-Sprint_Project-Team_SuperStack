// import { FrontendForm as Form } from "@shared/types/frontend-form";

type FormsResponseJSON = { message: string; data: Form[] };
type FormResponseJSON = { message: string; data: Form };

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api/v1`;
const FORM_ENDPOINT = "/forms";

export async function fetchForms(sessionToken?: string | null): Promise<Form[]> {
  const formResponse: Response = await fetch(
    `${BASE_URL}${FORM_ENDPOINT}`,
    sessionToken
      ? {
          headers: {
            Authorization: `Bearer ${sessionToken}`,
          },
        }
      : undefined
  );

  if (!formResponse.ok) {
    throw new Error("Failed to fetch forms");
  }

  const json: FormsResponseJSON = await formResponse.json();
  return json.data;
}

export async function createForm(form: Form,sessionToken?:string | null): Promise<Form>{
    const response: Response = await fetch(`${BASE_URL}${FORM_ENDPOINT}`,
        {method: "POST",
            body: JSON.stringify(form),
            headers: {
                "Content-Type": "application/json",
                ...(sessionToken ? {Authorization: `Bearer ${sessionToken}`} : {})
            }
        });

        if(!response.ok){
            throw new Error("Failed to create form");
        }
        const json: FormResponseJSON = await response.json();
        return json.data;
}


export async function getFormById(formId: number, sessionToken?: string | null): Promise<Form> {
  const formResponse: Response = await fetch(
    `${BASE_URL}${FORM_ENDPOINT}/${formId}`,
    sessionToken
      ? {
          headers: {
            Authorization: `Bearer ${sessionToken}`,
          },
        }
      : undefined
  );

  if (!formResponse.ok) {
    throw new Error(`Failed to fetch form with id ${formId}`);
  }

  const json: FormResponseJSON = await formResponse.json();
  return json.data;
}

export async function updateForm(form: Form, sessionToken: string) {
  const updateResponse: Response = await fetch(`${BASE_URL}${FORM_ENDPOINT}/${form.id}`, {
    method: "PUT",
    body: JSON.stringify({ ...form }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionToken}`,
    },
  });

  if (!updateResponse.ok) {
    throw new Error(`Failed to update form with id ${form.id}`);
  }

  const json: FormResponseJSON = await updateResponse.json();
  return json.data;
}
