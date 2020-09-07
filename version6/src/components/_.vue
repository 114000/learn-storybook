<template>
<div id="a">
    <a-table :data-source="data">
    <a-table-column key="name">
      <span slot="title">🍎姓名</span>
      <span slot-scope="record"><a-icon type="smile-o" />{{record.name}}</span>
    </a-table-column>
    <a-table-column dataIndex="age" key="age" title="年龄" />
    <status-column dataIndex="status" title="状态" :map="statusMap" />
    <a-table-column dataIndex="address" key="address" title="地址" />
    <a-table-column key="tags" title="标签">
      <template slot-scope="record">
        <a-tag v-for="tag in record.tags" :key="tag">{{ tag }}</a-tag>
      </template>
    </a-table-column>
    <a-table-column title="操作">
      <template slot-scope="record">
        <a>Invite 一 {{ record.name }}</a>
        <a-divider type="vertical" />
        <a>Delete</a>
        <a-divider type="vertical" />
        <a class="ant-dropdown-link"> More actions <a-icon type="down" /> </a>
      </template>
    </a-table-column>
  </a-table>
</div>
</template>
<script>
import StatusColumn from './status-column'

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    status: 1,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    status: 2,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    status: 4,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

export default {
  components: { StatusColumn },
  data() {
    return {
      data,
      statusMap: {
        1: '已创建',
        2: '已下单',
        3: '已派送',
        4: '已签收',
        5: '已评价',
      }
    };
  },
};
</script>
