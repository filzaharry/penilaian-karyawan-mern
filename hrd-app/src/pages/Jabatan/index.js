import {
  faEdit,
  faInfo,
  faTrash,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { Button, Col, Input, Label } from "reactstrap";
import { Gap } from "../../components";

const Jabatan = () => {
  return (
    <div className="container">
      <Gap height={30} />
      <h1>Jabatan</h1>
      <h5 className="text-muted">
        Data terkait jabatan dapat dilihat dengan klik Lihat Data
      </h5>

      <Gap height={20} />
      <div className="row">
        {/* Label form Jabatan */}
        <Col md={5}>
          <Label for="kategori">Kategori :</Label>
          <Input type="text" name="kategori" id="kategori" />
          <Label for="kategori">Updah Per Hari :</Label>
          <Input type="text" name="kategori" id="kategori" />
          <Label for="kategori">Rata - rata Upah Per Bulan :</Label>
          <Input type="text" name="kategori" id="kategori" />
          <Gap height={20} />
          <Link to={"/departemen/tambah-departemen"}>
            <Button color="dark" className="mr-2">
              <FontAwesomeIcon icon={faUserAlt} /> Tambah Jabatan
            </Button>
          </Link>
        </Col>
        {/* End form jabatan */}
        <Gap height={20} />
        <table className="table ml-3 mt-4 shadow p-3 mb-5 bg-white rounded">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nama Jabatan</th>
              <th scope="col">Upah Per Hari</th>
              <th scope="col">Rata-rata Upah Per Bulan</th>
              <th scope="col">Action</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Operator</td>
              <td>IDR 120.000 ,-</td>
              <td>IDR 4.200.000 ,-</td>
              <td>
                <div className="">
                  <Link to="edit">
                    <Button color="info" className="mr-2">
                      <FontAwesomeIcon icon={faInfo} /> Detail
                    </Button>
                  </Link>
                  <Link to="edit">
                    <Button color="warning" className="mr-2">
                      <FontAwesomeIcon icon={faEdit} /> Edit
                    </Button>
                  </Link>
                  <Link to="edit">
                    <Button color="danger" className="mr-2">
                      <FontAwesomeIcon icon={faTrash} /> Hapus
                    </Button>
                  </Link>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Leader</td>
              <td>IDR 130.000 ,-</td>
              <td>IDR 4.500.000 ,-</td>
              <td>
                <div className="">
                  <Link to="edit">
                    <Button color="info" className="mr-2">
                      <FontAwesomeIcon icon={faInfo} /> Detail
                    </Button>
                  </Link>
                  <Link to="edit">
                    <Button color="warning" className="mr-2">
                      <FontAwesomeIcon icon={faEdit} /> Edit
                    </Button>
                  </Link>
                  <Link to="edit">
                    <Button color="danger" className="mr-2">
                      <FontAwesomeIcon icon={faTrash} /> Hapus
                    </Button>
                  </Link>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Supervisor</td>
              <td>IDR 100.000 ,-</td>
              <td>IDR 4.000.000 ,-</td>
              <td>
                <div className="">
                  <Link to="edit">
                    <Button color="info" className="mr-2">
                      <FontAwesomeIcon icon={faInfo} /> Detail
                    </Button>
                  </Link>
                  <Link to="edit">
                    <Button color="warning" className="mr-2">
                      <FontAwesomeIcon icon={faEdit} /> Edit
                    </Button>
                  </Link>
                  <Link to="edit">
                    <Button color="danger" className="mr-2">
                      <FontAwesomeIcon icon={faTrash} /> Hapus
                    </Button>
                  </Link>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Staff</td>
              <td>IDR 100.000 ,-</td>
              <td>IDR 4.000.000 ,-</td>
              <td>
                <div className="">
                  <Link to="edit">
                    <Button color="info" className="mr-2">
                      <FontAwesomeIcon icon={faInfo} /> Detail
                    </Button>
                  </Link>
                  <Link to="edit">
                    <Button color="warning" className="mr-2">
                      <FontAwesomeIcon icon={faEdit} /> Edit
                    </Button>
                  </Link>
                  <Link to="edit">
                    <Button color="danger" className="mr-2">
                      <FontAwesomeIcon icon={faTrash} /> Hapus
                    </Button>
                  </Link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Jabatan;
